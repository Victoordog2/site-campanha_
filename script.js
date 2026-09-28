/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


/* =========================
   VARIÁVEIS
========================= */

let selectedCity = null;
let selectedTheme = null;


/* =========================
   ELEMENTOS
========================= */

const cityButtons = document.querySelectorAll(".city-button");
const themeButtons = document.querySelectorAll(".theme-button");

const selectedCityElement =
    document.getElementById("selectedCity");

const resultTitle =
    document.getElementById("resultTitle");

const resultDescription =
    document.getElementById("resultDescription");

const resultIcon =
    document.getElementById("resultIcon");

const proposalList =
    document.getElementById("proposalList");


/* =========================
   DADOS DAS PROPOSTAS
========================= */

const proposals = {

    saude: {
        icon: "🏥",
        title: "Saúde",
        description:
            "Conheça as propostas relacionadas à saúde e ao atendimento da população.",
        items: [
            {
                title: "Mais recursos para a saúde",
                text: "Buscar recursos e apoiar projetos que ampliem a capacidade de atendimento."
            },
            {
                title: "Fortalecimento da atenção básica",
                text: "Incentivar iniciativas voltadas à prevenção e ao atendimento próximo das comunidades."
            },
            {
                title: "Apoio aos municípios",
                text: "Trabalhar pela articulação de recursos e projetos para os municípios da região."
            }
        ]
    },

    seguranca: {
        icon: "🛡️",
        title: "Segurança",
        description:
            "Propostas relacionadas à segurança pública e prevenção.",
        items: [
            {
                title: "Investimentos em segurança",
                text: "Buscar recursos para projetos que contribuam para a segurança da população."
            },
            {
                title: "Prevenção",
                text: "Apoiar iniciativas de prevenção à violência e proteção das comunidades."
            },
            {
                title: "Integração",
                text: "Incentivar a integração entre municípios e órgãos de segurança."
            }
        ]
    },

    educacao: {
        icon: "🎓",
        title: "Educação",
        description:
            "Propostas para ampliar oportunidades e melhorar a educação.",
        items: [
            {
                title: "Estrutura escolar",
                text: "Buscar recursos para melhorias na estrutura das escolas."
            },
            {
                title: "Tecnologia",
                text: "Apoiar projetos que aproximem estudantes das novas tecnologias."
            },
            {
                title: "Qualificação",
                text: "Incentivar programas de qualificação e formação profissional."
            }
        ]
    },

    emprego: {
        icon: "💼",
        title: "Emprego",
        description:
            "Propostas para desenvolvimento econômico e geração de oportunidades.",
        items: [
            {
                title: "Qualificação profissional",
                text: "Apoiar iniciativas de capacitação para trabalhadores."
            },
            {
                title: "Empreendedorismo",
                text: "Incentivar programas que fortaleçam pequenos negócios."
            },
            {
                title: "Desenvolvimento regional",
                text: "Buscar projetos que estimulem investimentos e geração de empregos."
            }
        ]
    },

    infraestrutura: {
        icon: "🛣️",
        title: "Infraestrutura",
        description:
            "Propostas relacionadas à mobilidade e infraestrutura.",
        items: [
            {
                title: "Melhorias viárias",
                text: "Buscar recursos para obras e melhorias na infraestrutura regional."
            },
            {
                title: "Mobilidade",
                text: "Apoiar projetos que melhorem a mobilidade da população."
            },
            {
                title: "Desenvolvimento urbano",
                text: "Incentivar investimentos em infraestrutura urbana."
            }
        ]
    }

};


/* =========================
   SELEÇÃO DA CIDADE
========================= */

cityButtons.forEach(button => {

    button.addEventListener("click", () => {

        cityButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCity = button.dataset.city;

        selectedCityElement.textContent =
            selectedCity;

        updateResult();

    });

});


/* =========================
   SELEÇÃO DO TEMA
========================= */

themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        themeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedTheme = button.dataset.theme;

        updateResult();

    });

});


/* =========================
   ATUALIZAR RESULTADO
========================= */

function updateResult() {

    if (!selectedCity || !selectedTheme) {

        return;

    }


    const data =
        proposals[selectedTheme];


    resultIcon.textContent =
        data.icon;


    resultTitle.textContent =
        `${data.title} em ${selectedCity}`;


    resultDescription.textContent =
        data.description;


    proposalList.innerHTML = "";


    data.items.forEach(item => {

        const proposal =
            document.createElement("div");

        proposal.classList.add("proposal");


        proposal.innerHTML = `
            <strong>${item.title}</strong>
            <span>${item.text}</span>
        `;


        proposalList.appendChild(proposal);

    });


    document
        .getElementById("result")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* =========================
   FECHAR MENU AO CLICAR
========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});
