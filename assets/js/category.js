document.addEventListener("DOMContentLoaded", function() {
    const categories = {
        "🎯 Battle Royale": ["Free Fire", "PUBGM"],
        "⚔️ MOBA": ["Mobile Legends: BangBang", "Arena of Valor"],
        "🎮 Arcade": ["Roblox", "Clash Royale", "Growtopia", "Brawlstars", "Stumble Guys", "Minecraft"]
    };

    const container = document.querySelector("#game-list .game-list-card-grid-container");
    if (!container) return;

    const allCards = Array.from(container.querySelectorAll(".game-list-card"));
    container.innerHTML = "";

    for (let category in categories) {
        const heading = document.createElement("h2");
        heading.textContent = category;
        heading.classList.add("category-title");
        container.appendChild(heading);

        const grid = document.createElement("div");
        grid.classList.add("category-grid");

        categories[category].forEach(gameName => {
            const card = allCards.find(c => c.querySelector("h3").textContent.trim() === gameName);
            if (card) grid.appendChild(card);
        });

        container.appendChild(grid);
    }
});