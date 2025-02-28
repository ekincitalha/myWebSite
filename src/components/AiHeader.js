import React, { useState, useEffect, useRef } from 'react';
import '../styles/AiHeader.css';

const AiHeader = () => {
    const [question, setQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputWrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputWrapperRef.current && !inputWrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const sampleQuestions = [
        "Talha'nın eğitim geçmişi nedir?",
        "Talha hangi teknolojilerle çalışıyor?",
        "Talha nerede çalışıyor?",
        "Talha kaç yaşında?"

    ];

    const handleSuggestionClick = (suggestion) => {
        setQuestion(suggestion);
        setShowSuggestions(false);
    };
    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim() || isLoading) return;

        const chatHistory = document.getElementById('chatHistory');
        console.log(chatHistory)

        // Kullanıcı mesajını ekle
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user-message';
        userMessage.textContent = question;
        chatHistory.appendChild(userMessage);

        // Loading mesajı
        const loadingMessage = document.createElement('div');
        loadingMessage.className = 'chat-message ai-message';
        loadingMessage.textContent = 'Düşünüyorum...';
        chatHistory.appendChild(loadingMessage);

        setIsLoading(true);
        const API_URL = "https://api.cohere.ai/v1/chat";
      
        try {
            const response = await fetch(
                API_URL,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_COHERE_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        message:`Lütfen bu soruya şu şekilde yanıt ver:
                        Eğer soru, "Talha" hakkında bilgi talep etmiyorsa, sadece soruyu doğrudan yanıtla. 
                        Eğer soru, açıkça "Talha" hakkında bilgi istiyorsa, aşağıdaki detayları kullanarak yanıtla:
                        Talha, 3.63 not ortalamasıyla ve 1.likle Kırıkkale Üniversitesi Bilgisayar Mühendisliği bölümünden 2023 yılındamezun olmuş, ${new Date(Date.now()).getFullYear() - 2001} yaşında bir yazılım geliştiricidir. 
                        Hazine ve Maliye Bakanlığı'nda çalışmaktadır ve Java, React, Redis, Kafka, Docker, Kubernetes ve PostgreSQL gibi teknolojilerle deneyimi vardır. 
                        Ankara'da yaşamaktadır ve 2022 yılından itibaren profesyonel olarak yazılım geliştirmektedir.
                        Soru: ${question}
                    `,
                        stream: false,
                    })
                }
            );

            const data = await response.json();
            console.log(data)
            const answer = data.text || 'Üzgünüm, şu anda cevap veremiyorum.';
            // Loading mesajını kaldır
            chatHistory.removeChild(loadingMessage);
            // AI cevabını ekle
            const aiMessage = document.createElement('div');
            aiMessage.className = 'chat-message ai-message';
            aiMessage.textContent = answer;
            chatHistory.appendChild(aiMessage);

        } catch (error) {
            console.error('Error:', error);
            loadingMessage.textContent = 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.';
        } finally {
            setIsLoading(false);
        }

        setQuestion('');
        chatHistory.scrollTop = chatHistory.scrollHeight;
    };

    return (
        <div className="ai-header">
            <div className="header-content">
                <div className="ai-chat-container">
                    <div className="chat-history" id="chatHistory">
                        <div className="chat-message ai-message">
                            Merhaba! Ben bir AI asistanım. Bana Talha hakkında veya istediğiniz soruyu sorabilirsiniz.
                        </div>
                    </div>
                    <form onSubmit={handleQuestionSubmit} className="chat-input">
                        <div className="input-wrapper" ref={inputWrapperRef} style={{ position: 'relative', flex: 1 }}>
                            <input
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                placeholder="Ask anything..."
                                disabled={isLoading}
                                style={{ width: '100%' }}
                            />
                            {showSuggestions && (
                                <div className="suggestions" style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '0',
                                    right: '0',
                                    backgroundColor: 'rgba(17, 25, 40, 0.95)',
                                    border: '1px solid rgba(255, 255, 255, 0.125)',
                                    borderRadius: '12px',
                                    marginTop: '8px',
                                    backdropFilter: 'blur(16px)',
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                    zIndex: 1000
                                }}>
                                    {sampleQuestions.map((q, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSuggestionClick(q)}
                                            style={{
                                                padding: '8px 12px',
                                                cursor: 'pointer',
                                                color: '#e2e8f0',
                                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                                transition: 'background-color 0.2s ease',
                                                fontSize: '14px'
                                            }}
                                            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                                        >
                                            <i className="fas fa-search" style={{ marginRight: '8px', opacity: 0.7 }}></i>
                                            {q}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button type="submit" disabled={isLoading}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AiHeader;