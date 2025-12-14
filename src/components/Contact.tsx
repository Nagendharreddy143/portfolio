import React, { useState, useRef, useEffect } from 'react';
import { SectionId, ChatMessage } from '../types';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { chatWithAgent } from '../services/geminiService';

const Contact: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Chat State
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m Nani AI, your personal assistant. Ask me anything about Nagendhar\'s skills or experience!' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! This is a demo form.');
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: chatInput };
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    const responseText = await chatWithAgent(userMsg.text);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsTyping(false);
  };

  return (
    <section id={SectionId.CONTACT} className="bg-black text-white py-10 md:py-12 px-6 md:px-12 relative overflow-hidden scroll-mt-28">

      {/* Decorative large text */}
      <div className="absolute -top-10 left-0 text-[10rem] font-bold text-white/5 pointer-events-none select-none">
        CONNECT
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">

        {/* Contact Form Section */}
        <div>
          <span className="text-[#FF3B3B] text-sm font-bold tracking-widest uppercase block mb-4">
            Let's Work Together
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Have a project in mind?
          </h2>

          <div className="mb-6">
            <a href="mailto:reddynagendhar942@gmail.com" className="text-lg md:text-2xl border-b-2 border-white/20 hover:border-[#FF3B3B] hover:text-[#FF3B3B] transition-colors pb-1">
              reddynagendhar942@gmail.com
            </a>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5 max-w-lg">
            <div className="group">
              <label className="block text-xs md:text-sm text-gray-500 mb-1 group-focus-within:text-[#FF3B3B]">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/20 py-2 text-sm md:text-base focus:outline-none focus:border-[#FF3B3B] transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="group">
              <label className="block text-xs md:text-sm text-gray-500 mb-1 group-focus-within:text-[#FF3B3B]">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/20 py-2 text-sm md:text-base focus:outline-none focus:border-[#FF3B3B] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="group">
              <label className="block text-xs md:text-sm text-gray-500 mb-1 group-focus-within:text-[#FF3B3B]">Message</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-white/20 py-2 text-sm md:text-base focus:outline-none focus:border-[#FF3B3B] transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="border border-white/30 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider hover:bg-[#FF3B3B] hover:border-[#FF3B3B] transition-all duration-300">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* AI Chat Agent Section */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-5 flex flex-col h-[400px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3B3B] to-purple-600"></div>

          <div className="flex items-center space-x-3 mb-3 border-b border-white/10 pb-2">
            <div className="p-1.5 bg-[#FF3B3B]/10 rounded-full">
              <Sparkles size={16} className="text-[#FF3B3B]" />
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base">Nani AI</h3>
              <p className="text-[10px] text-gray-500">Your Personal Assistant</p>
            </div>
          </div>

          <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-3 pr-2 mb-3 scrollbar-thin scrollbar-thumb-gray-800">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-xs md:text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-[#FF3B3B] text-white rounded-br-none'
                  : 'bg-[#222] text-gray-200 rounded-bl-none border border-white/5'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Suggested Questions - Show only when there's just the welcome message */}
            {messages.length === 1 && !isTyping && (
              <div className="space-y-2">
                <p className="text-[10px] text-gray-500 px-1">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What are your skills?",
                    "Tell me about your experience",
                    "What projects have you built?",
                    "How can I contact you?"
                  ].map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setChatInput(suggestion);
                        // Auto-submit after a brief delay
                        setTimeout(() => {
                          const form = document.querySelector('form[data-chat-form]') as HTMLFormElement;
                          if (form) form.requestSubmit();
                        }, 100);
                      }}
                      className="text-[10px] px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#222] rounded-2xl p-3 rounded-bl-none flex space-x-2 items-center">
                  <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleChatSubmit} data-chat-form className="relative">
            <input
              type="text"
              placeholder="Ask about my skills..."
              className="w-full bg-[#000] border border-white/20 rounded-full pl-4 pr-10 py-2.5 focus:outline-none focus:border-[#FF3B3B] transition-colors text-xs md:text-sm"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !chatInput.trim()}
              className="absolute right-1.5 top-1.5 p-1.5 bg-[#FF3B3B] rounded-full text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTyping ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            </button>
          </form>
        </div>

      </div>

      <footer className="max-w-[1800px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] md:text-xs">
        <div>© 2024 Nagendhar. All rights reserved.</div>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 justify-center">
          <a href="https://github.com/Nagendharreddy143" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/nagender-reddy1406/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/nagendhar_1403/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B3B] transition-colors">Instagram</a>
          <a href="https://www.instagram.com/tripple_factor/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B3B] transition-colors">Tripple Factor</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;