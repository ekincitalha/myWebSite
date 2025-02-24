// Soru-cevap veritabanı
const qaDatabase = {
    "talha ne mezunu": "Talha, Kırıkkale Üniversitesi Bilgisayar Mühendisliği mezunudur.",
    "talha nerede yaşıyor": "Talha şu anda İstanbul'da yaşıyor.",
    "talha kaç yaşında": "Talha 25 yaşındadır.",
    "talha hangi teknolojilerle çalışıyor": "Talha, React, Node.js, JavaScript ve Python gibi teknolojilerle çalışıyor.",
    // Daha fazla soru-cevap ekleyebilirsiniz
};

// OpenAI API anahtarınızı buraya ekleyin
const OPENAI_API_KEY = 'your-api-key-here';

async function askQuestion() {
    const userInput = document.getElementById('userQuestion').value;
    const chatHistory = document.getElementById('chatHistory');
    
    // Kullanıcı mesajını ekle
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = userInput;
    chatHistory.appendChild(userMessage);

    // Loading mesajı
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'chat-message ai-message';
    loadingMessage.textContent = 'Düşünüyorum...';
    chatHistory.appendChild(loadingMessage);

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: `Sen Talha'nın kişisel asistanısın. Talha hakkında şu bilgileri biliyorsun:
                    - Kırıkkale Üniversitesi Bilgisayar Mühendisliği mezunu
                    - İstanbul'da yaşıyor
                    - 25 yaşında
                    - React, Node.js, JavaScript ve Python teknolojileriyle çalışıyor
                    Bu bilgileri kullanarak soruları yanıtla.`
                }, {
                    role: "user",
                    content: userInput
                }],
                temperature: 0.7
            })
        });

        const data = await response.json();
        
        // Loading mesajını kaldır
        chatHistory.removeChild(loadingMessage);

        // AI cevabını ekle
        const aiMessage = document.createElement('div');
        aiMessage.className = 'chat-message ai-message';
        aiMessage.textContent = data.choices[0].message.content;
        chatHistory.appendChild(aiMessage);

    } catch (error) {
        // Hata durumunda loading mesajını güncelle
        loadingMessage.textContent = 'Üzgünüm, bir hata oluştu.';
        console.error('Error:', error);
    }

    // Sohbet geçmişini en alta kaydır
    chatHistory.scrollTop = chatHistory.scrollHeight;
    
    // Input alanını temizle
    document.getElementById('userQuestion').value = '';
}

// Enter tuşuna basıldığında soruyu gönder
document.getElementById('userQuestion').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        askQuestion();
    }
}); 