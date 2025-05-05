const agentsData = {
    Kael: {
        name: "KAEL",
        roleIcon: "../images/icons/Initiator.webp",
        desc: "Born in Russia's icy tundra, Kael is a master tracker who hunts with precision and efficiency. Armed with a custom bow and advanced scouting tools, he reveals and eliminates enemies, ensuring no one can escape his sight. With every shot, he turns the battlefield into his domain.",
        agentImage: "../images/Kael.webp",
        abilities: [
            { icon: "../images/icons/shockBoltKael.webp", video: "../videos/shockBoltKael.mp4", name: "Shock Bolt" },
            { icon: "../images/icons/reconBoltKael.webp", video: "../videos/reconBoltKael.mp4", name: "Recon Bolt" },
            { icon: "../images/icons/owlDroneKael.webp", video: "../videos/owlDroneKael.mp4", name: "Owl Drone" },
            { icon: "../images/icons/hunterFuryKael.webp", video: "../videos/hunterFuryKael.mp4", name: "Hunter's Fury" }
        ]
    },
    Rael: {
        name: "RAEL",
        roleIcon: "../images/icons/sentinel.webp",
        desc: "Rael, the sentinel from China, is the ultimate protector on the battlefield. With abilities to heal, slow enemies, and even revive fallen allies, she brings hope in the darkest moments. Not just a lifesaver, Rael commands the fight with unshakable calm and precision.",
        agentImage: "../images/rael.webp",
        abilities: [
            { icon: "../images/icons/slowOrbRael.webp", video: "../videos/slowOrbRael.mp4", name: "Slow Orb" },
            { icon: "../images/icons/healingOrbRael.webp", video: "../videos/healingOrbRael.mp4", name: "Healing Orb" },
            { icon: "../images/icons/barrierRael.png", video: "../videos/barrierOrbRael.mp4", name: "Barrier Orb" },
            { icon: "../images/icons/resurrectionRael.webp", video: "../videos/resurrectionRael.mp4", name: "Resurrection" }
        ]
    },
    Zyro: {
        name: "ZYRO",
        roleIcon: "../images/icons/Controller.webp",
        desc: "A shadowy enigma, Zyro moves unseen, striking fear into the hearts of his enemies. He blinds his foes, teleports across the battlefield, and leaves paranoia in his wake as they struggle to anticipate his next move.",
        agentImage: "../images/Zyro.webp",
        abilities: [
            { icon: "../images/icons/paranoiaZyro.webp", video: "../videos/paranoiaZyro.mp4", name: "Paranoia" },
            { icon: "../images/icons/darkCoverZyro.webp", video: "../videos/darkCoverZyro.mp4", name: "Dark Cover" },
            { icon: "../images/icons/shroudedStepZyro.webp", video: "../videos/shroudedStepZyro.mp4", name: "Shrouded Step" },
            { icon: "../images/icons/fromtheShadowsZyro.webp", video: "../videos/fromtheShadowsZyro.mp4", name: "From The Shadows" }
        ]
    },
    Solvian: {
        name: "SOLVIAN",
        roleIcon: "../images/icons/Duelist.webp",
        desc: "Hailing from the U.K., Solvian lights up the battlefield with his explosive fighting style, using fire to dominate his enemies. With a flare for the dramatic, he charges into battle with confidence, whether he's got backup or not, always on his own terms.",
        agentImage: "../images/Solvian.webp",
        abilities: [
            { icon: "../images/icons/curveballSolvian.webp", video: "../videos/curveballSolvian.mp4", name: "Curveball" },
            { icon: "../images/icons/hotHandsSolvian.webp", video: "../videos/hotHandsSolvian.mp4", name: "Hot Hands" },
            { icon: "../images/icons/blazeSolvian.webp", video: "../videos/blazeSolvian.mp4", name: "Blaze" },
            { icon: "../images/icons/runitBackSolvian.webp", video: "../videos/runitBackSolvian.mp4", name: "Run It Back" }
        ]
    },
    Kaizen: {
        name: "KAIZEN",
        roleIcon: "../images/icons/sentinel.webp",
        desc: "Kaizen, the Moroccan information broker, is a master of surveillance and strategy. A one-man network, he tracks every enemy move, uncovering secrets and exposing plans. No corner is hidden, no step unnoticed—Kaizen is always watching.",
        agentImage: "../images/Kaizen.webp",
        abilities: [
            { icon: "../images/icons/cyberCageKaizen.webp", video: "../videos/cyberCageKaizen.mp4", name: "Cyber Cage" },
            { icon: "../images/icons/spycamKaizen.webp", video: "../videos/spycamKaizen.mp4", name: "Spycam" },
            { icon: "../images/icons/trapwireKaizen.webp", video: "../videos/trapwireKaizen.mp4", name: "Trapwire" },
            { icon: "../images/icons/neuralTheftKaizen.webp", video: "../videos/neuralTheftKaizen.mp4", name: "Neural Theft" }
        ]
    }
};

function selectAgent(agentName) {
    const agent = agentsData[agentName];
    if (!agent) return console.error("Agent not found:", agentName);

    // Set elemen utama agent
    document.getElementById("agent-name").innerText = agent.name;
    document.getElementById("agent-role").src = agent.roleIcon;
    document.getElementById("agent-desc").innerText = agent.desc;
    document.getElementById("agent-image").src = agent.agentImage;

    // Ganti icon abilities
    const abilitiesContainer = document.getElementById("abilities-icons");
    abilitiesContainer.innerHTML = "";

    agent.abilities.forEach((ability, index) => {
        const abilityImg = document.createElement("img");
        abilityImg.src = ability.icon;
        abilityImg.alt = ability.name;
        abilityImg.classList.add("ability-icon");
        if (index === 0) abilityImg.classList.add("selected");

        abilityImg.onclick = function () {
            document.querySelectorAll('#abilities-icons img').forEach(img => img.classList.remove("selected"));
            this.classList.add("selected");
            changeVideo(ability.video);
        };

        abilitiesContainer.appendChild(abilityImg);
    });

    // Set video ability pertama
    if (agent.abilities.length > 0) {
        changeVideo(agent.abilities[0].video);
    }

    // Highlight agent yang dipilih
    document.querySelectorAll('.agents').forEach(el => el.classList.remove('active'));
    const selected = Array.from(document.querySelectorAll('.agents')).find(el => {
        const name = el.querySelector('.agents-name');
        return name && name.textContent.trim().toUpperCase() === agent.name;
    });
    if (selected) selected.classList.add('active');
}

function changeVideo(videoSrc) {
    const video = document.getElementById("ability-video");
    video.querySelector("source").src = videoSrc;
    video.load();
    video.play();
}

// Pilih agent default saat pertama load
window.onload = () => selectAgent('Kael');
