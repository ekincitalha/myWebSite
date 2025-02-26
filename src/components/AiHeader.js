import React, { useState } from 'react';
import '../styles/AiHeader.css';

const AiHeader = () => {
    const [question, setQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim() || isLoading) return;

        const chatHistory = document.getElementById('chatHistory');
        
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
        const API_URL =  "https://api.cohere.ai/v1/chat";
      
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
                    model: 'command-r-plus',
                    message:`Eğer soru açıkça Talha hakkında bilgi istemiyorsa, Talha hakkında hiçbir bilgi verme ve sadece soruyu yanıtla. Bağlam: Talha, 3.63 not ortalamasıyla ve 1.likle Kırıkkale Üniversitesi Bilgisayar Mühendisliği bölümünden mezun olmuş ${new Date(Date.now()).getFullYear()-2001} yaşında bir yazılım geliştiricidir. Hazine ve Maliye Bakanlığı'nda çalışmaktadır. Java, React, Redis, Kafka, Docker, Kubernetes ve PostgreSQL konularında deneyime sahiptir. Ankara'da yaşamaktadır ve 2022 yılından beri profesyonel olarak çalışmaktadır. Soru: ${question}`,
                    stream:false,

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
                            Merhaba! Ben bir AI asistanım. Bana istediğiniz soruyu sorabilirsiniz.
                        </div>
                    </div>
                    <form onSubmit={handleQuestionSubmit} className="chat-input">
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Sormak istediğiniz soruyu yazın..."
                            disabled={isLoading}
                        />
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