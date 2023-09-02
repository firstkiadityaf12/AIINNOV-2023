const chatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span")
const chatbox = document.querySelector(".chatbox")

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi
}


const customResponses = {
    // semakin kebawah semakin general
    // edukasi seks
    "edukasi seks": "Pendidikan seks adalah topik penting yang mencakup berbagai aspek tentang seksualitas manusia, hubungan, dan kesehatan reproduksi.",

    // pornografi
    "pornografi": "Pornografi adalah penggambaran tubuh manusia atau perilaku seksualitas manusia secara terbuka dengan tujuan membangkitkan hasrat seksual.",

    // hiv dan aids
    "pencegahan hiv aids": "Pencegahan HIV/AIDS meliputi penggunaan kondom, menjalani tes HIV secara teratur, membatasi pasangan seksual, dan meningkatkan kesadaran.",
    "rentan terkena hiv aids":"Orang yang rentan terkena HIV dan AIDS meliputi mereka yang terlibat dalam hubungan seks tanpa pengaman, berbagi jarum suntik, memiliki pasangan seksual yang terinfeksi, pelaku seks komersial, individu dengan infeksi menular seksual lainnya, anak-anak dari ibu terinfeksi HIV, orang yang menerima transfusi darah tidak aman, berbagi peralatan tato tidak steril, dan tenaga kesehatan yang terpapar darah pasien.",
    "ciri terkena hiv aids": "Ciri-ciri orang terkena HIV/AIDS meliputi gejala awal seperti demam, pembengkakan kelenjar getah bening, ruam kulit, dan gejala mirip pilek. Fase kronis mungkin tanpa gejala, tapi ada risiko infeksi lain. Fase AIDS ditandai dengan infeksi berat, penurunan berat badan, demam yang tak jelas, dan kelelahan parah. Tes darah diperlukan untuk diagnosis pasti.",
    "hiv": "HIV adalah Virus Imunodefisiensi Manusia, yang menyerang sistem kekebalan tubuh dan dapat mengakibatkan AIDS.",
    "aids": "AIDS (Sindrom Imunodefisiensi Didapat) adalah tahap lanjut dari infeksi HIV, mengakibatkan penurunan fungsi kekebalan tubuh.",

    // kekerasan seksual
    "pencegahan kekerasan seksual": "Pencegahan kekerasan seksual meliputi edukasi, kesadaran, dan mempromosikan kesetaraan dan penghormatan.",
    "kekerasan seksual": "Kekerasan seksual adalah perilaku yang melibatkan tindakan seksual tanpa persetujuan atau paksaan terhadap seseorang.",
};

const generateResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    for (const keyword in customResponses) {
        if (lowerCaseMessage.includes(keyword)) {
            return customResponses[keyword];
        }
    }

    return "Saya adalah asisten virtual. Bagaimana saya bisa membantu Anda?";
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        const response = generateResponse(userMessage);
        const incomingChatLi = createChatLi(response, "incoming");
        chatbox.appendChild(incomingChatLi);
    }, 2000)
}

sendChatBtn.addEventListener("click", handleChat);