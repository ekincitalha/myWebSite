import React, { useState } from 'react';
import '../styles/AiHeader.css';

const AiHeader = () => {
    const [question, setQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Talha hakkında bilgi tabanı
    const talhaInfo = {
        kişisel: {
            yaş: 23,
            lokasyon: 'Ankara',
            eğitim: 'Kırıkkale Üniversitesi Bilgisayar Mühendisliği',
            başlangıçYılı: 2022,
            ortalama:3.63
        },
        iş: {
            şirket: 'Hazine ve Maliye Bakanlığı',
            pozisyon: 'Yazılım Geliştirici',
            teknolojiler: ['Java', 'React', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'PostgreSQL']
        }
    };

    // Akıllı cevap oluşturucu
    const generateAnswer = (question) => {
        const q = question.toLowerCase();
        
        // Deneyim hesaplama
        if (q.includes('kaç yıl') || q.includes('ne kadar') || q.includes('tecrübe')) {
            const yıl = new Date().getFullYear() - talhaInfo.kişisel.başlangıçYılı;
            return `Talha ${yıl} yıldır profesyonel olarak yazılım geliştirici olarak çalışıyor.`;
        }

        // Teknoloji stack'i hakkında sorular
        if (q.includes('teknoloji') || q.includes('yazılım') || q.includes('programlama')) {
            const backEnd = talhaInfo.iş.teknolojiler.filter(t => ['Java', 'Redis', 'Kafka', 'PostgreSQL'].includes(t));
            const frontEnd = talhaInfo.iş.teknolojiler.filter(t => ['React'].includes(t));
            const devOps = talhaInfo.iş.teknolojiler.filter(t => ['Docker', 'Kubernetes'].includes(t));

            return `Talha backend'de ${backEnd.join(', ')}, frontend'de ${frontEnd.join(', ')}, ve DevOps tarafında ${devOps.join(', ')} teknolojileriyle çalışıyor.`;
        }

        // Eğitim bilgisi
        if (q.includes('okul') || q.includes('üniversite') || q.includes('mezun') || q.includes('eğitim')) {
            return `Talha ${talhaInfo.kişisel.ortalama} ortalama ile ${talhaInfo.kişisel.eğitim} mezunu. Burada aldığı eğitimle yazılım mühendisliği kariyerine başladı.`;
        }

        // İş ve kariyer
        if (q.includes('çalış') || q.includes('iş') || q.includes('kariyer') || q.includes('meslek')) {
            return `Talha şu anda ${talhaInfo.iş.şirket}'nda ${talhaInfo.iş.pozisyon} olarak çalışıyor. Modern yazılım teknolojileriyle kurumsal projeler geliştiriyor.`;
        }

        // Yaş ve kişisel bilgiler
        if (q.includes('yaş') || q.includes('kaç yaşında')) {
            return `Talha ${talhaInfo.kişisel.yaş} yaşında, kariyerinin başında bir yazılım geliştirici.`;
        }

        // Lokasyon
        if (q.includes('nerede') || q.includes('şehir') || q.includes('yaşı')) {
            return `Talha ${talhaInfo.kişisel.lokasyon}'da yaşıyor ve çalışıyor. ${talhaInfo.iş.şirket}'nda görev yapıyor.`;
        }

        // Genel bilgi soruları
        if (q.includes('kim') || q.includes('anlat') || q.includes('bahset')) {
            return `Talha, ${talhaInfo.kişisel.yaş} yaşında, ${talhaInfo.kişisel.eğitim} mezunu bir yazılım geliştirici. Şu anda ${talhaInfo.kişisel.lokasyon}'da ${talhaInfo.iş.şirket}'nda çalışıyor. Modern teknolojilerle backend, frontend ve DevOps alanlarında geliştirmeler yapıyor.`;
        }

        // Varsayılan cevap
        return `Üzgünüm, bu konuda net bir bilgim yok. Talha'nın eğitimi, iş deneyimi, teknoloji stack'i veya kişisel bilgileri hakkında sorular sorabilirsiniz.`;
    };

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

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Akıllı cevap oluştur
            const answer = generateAnswer(question);

            // Loading mesajını kaldır
            chatHistory.removeChild(loadingMessage);

            // AI cevabını ekle
            const aiMessage = document.createElement('div');
            aiMessage.className = 'chat-message ai-message';
            aiMessage.textContent = answer;
            chatHistory.appendChild(aiMessage);

        } catch (error) {
            console.error('Error details:', error);
            loadingMessage.textContent = `Üzgünüm, bir hata oluştu: ${error.message}`;
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
                            Merhaba! Ben Talha'nın AI asistanıyım. Talha hakkında istediğiniz soruyu sorabilirsiniz.
                        </div>
                    </div>
                    <form onSubmit={handleQuestionSubmit} className="chat-input">
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Örn: Talha'nın uzmanlık alanları neler?"
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