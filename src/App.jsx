import React, { useState, useEffect, useRef } from 'react';
import { Send, Sun, Moon } from 'lucide-react';

const LiveBackground = ({ isDarkMode }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        {/* Основной большой градиент */}
        <div className="absolute w-[1200px] h-[1200px] rounded-full filter blur-3xl animate-float-1"
          style={{
            left: '-400px',
            top: '-200px',
            background: isDarkMode ?
              'radial-gradient(circle, rgba(30,58,138,0.15) 0%, rgba(30,41,59,0.1) 40%, rgba(0,0,0,0) 70%)' :
              'radial-gradient(circle, rgba(219,234,254,0.8) 0%, rgba(191,219,254,0.4) 40%, rgba(255,255,255,0) 70%)'
          }} />
        {/* Средний градиент */}
        <div className="absolute w-[1000px] h-[1000px] rounded-full filter blur-3xl animate-float-2"
          style={{
            right: '-200px',
            top: '10%',
            background: isDarkMode ?
              'radial-gradient(circle, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.1) 40%, rgba(0,0,0,0) 70%)' :
              'radial-gradient(circle, rgba(191,219,254,0.6) 0%, rgba(147,197,253,0.3) 40%, rgba(255,255,255,0) 70%)'
          }} />
        {/* Нижний градиент */}
        <div classNamВe="absolute w-[900px] h-[900px] rounded-full filter blur-3xl animate-float-3"
          style={{
            left: '20%',
            bottom: '-300px',
            background: isDarkMode ?
              'radial-gradient(circle, rgba(51,65,85,0.15) 0%, rgba(30,41,59,0.1) 40%, rgba(0,0,0,0) 70%)' :
              'radial-gradient(circle, rgba(147,197,253,0.5) 0%, rgba(186,230,253,0.2) 40%, rgba(255,255,255,0) 70%)'
          }} />

        {/* Тонкие акценты */}
        <div className="absolute w-[300px] h-[300px] rounded-full filter blur-xl animate-pulse-1"
          style={{
            left: '45%',
            top: '30%',
            background: isDarkMode ?
              'radial-gradient(circle, rgba(51,65,85,0.1) 0%, rgba(0,0,0,0) 70%)' :
              'radial-gradient(circle, rgba(147,197,253,0.3) 0%, rgba(255,255,255,0) 70%)'
          }} />
        <div className="absolute w-[250px] h-[250px] rounded-full filter blur-xl animate-pulse-2"
          style={{
            right: '35%',
            bottom: '20%',
            background: isDarkMode ?
              'radial-gradient(circle, rgba(30,58,138,0.1) 0%, rgba(0,0,0,0) 70%)' :
              'radial-gradient(circle, rgba(186,230,253,0.3) 0%, rgba(255,255,255,0) 70%)'
          }} />
      </div>

      {/* Тонкая сетка для текстуры */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.5
        }}
      />
    </div>
  );
};

const OZAvaiseChat = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage = { id: Date.now(), type: 'user', content: input };
      setMessages(prev => [...prev, userMessage]);
      setInput('');

      setTimeout(() => {
        const aiMessage = { id: Date.now() + 1, type: 'ai', content: 'Текст ИИ будет тут' };
        setMessages(prev => [...prev, aiMessage]);
      }, 1000);
    }
  };

  const theme = {
    main: {
      bg: isDarkMode ? '#0a0f1a' : '#f8fafc',
      text: isDarkMode ? '#e2e8f0' : '#0f172a'
    },
    nav: {
      bg: isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(248, 250, 252, 0.8)',
      shadow: isDarkMode
        ? '0 1px 30px -12px rgba(255,255,255,0.05)'
        : '0 3px 20px -10px rgba(0,0,0,0.1)'
    },
    message: {
      user: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
      ai: {
        bg: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.7)',
        shadow: isDarkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.05)'
      }
    },
    input: {
      bg: isDarkMode ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)',
      placeholder: isDarkMode ? '#475569' : '#94a3b8',
      border: isDarkMode ? '2px solid #3b82f6' : '2px solid #2563eb',
      shadow: isDarkMode ? '0 4px 10px rgba(59, 130, 246, 0.4)' : '0 4px 10px rgba(37, 99, 235, 0.3)'
    },
    scrollbar: {
      thumb: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.main.bg,
      color: theme.main.text,
      overflowX: 'hidden',
      position: 'relative',
      transition: 'background-color 0.5s ease, color 0.5s ease'
    }}>
      <LiveBackground isDarkMode={isDarkMode} />

      {/* Header */}
      <div style={{
        backgroundColor: theme.nav.bg,
        boxShadow: theme.nav.shadow,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'background-color 0.5s ease, box-shadow 0.5s ease'
      }}>
        <div className="max-w-screen-lg mx-auto px-8">
          <div className="h-20 flex items-center justify-between">
            <h1 className="text-2xl tracking-[0.2em]">
              <span className="font-extralight">OZ</span>
              <span className="mx-2" />
              <span className="font-thin">AVAISE</span>
            </h1>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-opacity-20 transition-all duration-300"
              style={{ backgroundColor: theme.message.user }}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" color="#e2e8f0" />
              ) : (
                <Moon className="w-5 h-5" color="#0f172a" />
              )}
            </button>
          </div>
        </div>
      </div>


      {/* Messages */}
      <div className="chat-scroll flex-1 overflow-y-auto overflow-x-hidden">
        <div className="max-w-screen-lg mx-auto px-8 py-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={message.type === 'user' ? 'slide-in-right' : 'slide-in-left'}
                  style={{
                    maxWidth: '28rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '0.75rem',
                    backgroundColor: message.type === 'user' ? theme.message.user : theme.message.ai.bg,
                    boxShadow: message.type === 'ai' ? theme.message.ai.shadow : 'none',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    transition: 'background-color 0.5s ease, box-shadow 0.5s ease'
                  }}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="max-w-screen-lg mx-auto w-full px-8 py-6">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Message"
            style={{
              width: '100%',
              padding: '1rem 3rem 1rem 1.25rem',
              borderRadius: '0.75rem',
              outline: 'none',
              backgroundColor: theme.input.bg,
              color: theme.main.text,
              border: 'none', // Убрана рамка
              boxShadow: theme.input.shadow,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              transition: 'background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease'
            }}
          />
          <button
            onClick={sendMessage}
            className="absolute right-3"
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              color: theme.input.placeholder,
              opacity: input.trim() ? 1 : 0.5,
              transition: 'opacity 0.3s ease, color 0.5s ease'
            }}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
      <style jsx global>{`
        .chat-scroll::-webkit-scrollbar {
          width: 3px;
        }

        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-scroll::-webkit-scrollbar-thumb {
          background: ${theme.scrollbar.thumb};
          border-radius: 3px;
        }

        .chat-scroll {
          scrollbar-width: thin;
          scrollbar-color: ${theme.scrollbar.thumb} transparent;
        }

        .slide-in-right {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .slide-in-left {
          animation: slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, 30px) rotate(2deg); }
          66% { transform: translate(-20px, 50px) rotate(-2deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 40px) rotate(-2deg); }
          66% { transform: translate(20px, -30px) rotate(2deg); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(25px, -35px) rotate(2deg); }
          66% { transform: translate(-25px, -25px) rotate(-2deg); }
        }

        @keyframes pulse-1 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          50% { transform: scale(1.05) translate(5px, -5px); opacity: 0.7; }
        }

        @keyframes pulse-2 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          50% { transform: scale(1.05) translate(-5px, 5px); opacity: 0.7; }
        }

        .animate-float-1 {
          animation: float-1 25s infinite ease-in-out;
        }

        .animate-float-2 {
          animation: float-2 30s infinite ease-in-out;
        }

        .animate-float-3 {
          animation: float-3 28s infinite ease-in-out;
        }

        .animate-pulse-1 {
          animation: pulse-1 10s infinite ease-in-out;
        }

        .animate-pulse-2 {
          animation: pulse-2 12s infinite ease-in-out;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default OZAvaiseChat;