// تخزين الرسائل في مصفوفة
let messages = [];

// دالة لإضافة رسالة جديدة وعرضها في الدردشة
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message) {
        messages.push(message);
        updateMessages();
        messageInput.value = ''; // مسح حقل الإدخال بعد الإرسال
    }
}

// دالة لتحديث عرض الرسائل
function updateMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = msg;
        messagesDiv.appendChild(messageDiv);
    });
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // التمرير لأسفل
}

// عندما يتم الضغط على زر الإرسال
document.getElementById('sendButton').addEventListener('click', sendMessage);

// السماح بإرسال الرسالة عند الضغط على زر الإدخال
document.getElementById('messageInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});