let currentState = "start";

let gameData = {
  start: {
    text: "A odyssey in a mysterious world",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/1658235712240-YPB9XFATMH4VR5I8J5D3/beni-johnson-the-3-spirit-realms-and-the-keys-to-intercession.jpg",
  },
  start1: {
    text: "You find yourself in a realm where reality blends with fantasy. Choose your adventure.",
    choices: ["Seek the Enchanted Forest", "Investigate the Mysterious Castle"],
    consequences: ["enchantedForest", "mysteriousCastle"],
    image: "https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/7287f2d1-92e4-47ae-815c-9b363e448d3b/55e87f16-56a0-4fee-bbb1-8bf93cfe9222.png",
},
enchantedForest: {
    text: "You enter the Enchanted Forest. What will you discover?",
    choices: ["Ancient Tree Spirit", "Hidden Elven Village"],
    consequences: ["treeSpirit", "elvenVillage"],
    image: "https://img-v3.deepdreamgenerator.com/3311809/8jly7w_795243e74cff4c032698090256557cf8c05b6e0f.jpg",
},
mysteriousCastle: {
    text: "You approach the Mysterious Castle. What do you wish to explore?",
    choices: ["Dungeon Depths", "Royal Archives"],
    consequences: ["dungeonDepths", "royalArchives"],
    image: "https://ik.imagekit.io/storybird/images/c7a6504b-2f0a-4497-a13a-b71d26ec1301/0_484359157.png",
},
treeSpirit: {
    text: "You encounter an ancient tree spirit. How do you interact?",
    choices: ["Seek Wisdom", "Offer Help"],
    consequences: ["seekWisdom", "offerHelp"],
    image: "https://t4.ftcdn.net/jpg/05/44/15/53/360_F_544155390_VNebPyLxvvkvcvF1HVBetrGRABFelPgq.jpg",
},
elvenVillage: {
    text: "You find a hidden Elven Village. What's your next step?",
    choices: ["Learn Elven Magic", "Join the Forest Guardians"],
    consequences: ["learnMagic", "joinGuardians"],
    image: "https://cdn.openart.ai/stable_diffusion/eb135c4f68cf2043726b23fc65c80fbbc0402b0c_2000x2000.webp",
},
dungeonDepths: {
    text: "You explore the dungeon depths. What do you encounter?",
    choices: ["Ancient Artifact", "Imprisoned Dragon"],
    consequences: ["ancientArtifact", "imprisonedDragon"],
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Beneath-the-Stolen-Lands-Mega-Dungeon-in-Pathfinder-Kingmaker.jpg",
},
royalArchives: {
    text: "You delve into the Royal Archives. What do you uncover?",
    choices: ["Lost Knowledge", "Secret Passage"],
    consequences: ["lostKnowledge", "secretPassage"],
    image: "https://cdna.artstation.com/p/assets/images/images/021/212/430/large/ryan-groskamp-royal-archives.jpg?1570800609",
},
seekWisdom: {
    text: "The tree spirit imparts ancient wisdom to you. You gain profound insight!",
    choices: ["Ending 1"],
    image: "https://img.artpal.com/432172/22-23-2-17-12-6-13m.jpg",
},
offerHelp: {
    text: "You help heal the tree spirit. In gratitude, it blesses you with nature's bounty!",
    choices: ["Ending 2"],
    image: "https://images.nightcafe.studio/jobs/FEZzSq4zfF5Kz5O9TVDC/FEZzSq4zfF5Kz5O9TVDC--3--0z422.jpg?tr=w-1600,c-at_max",
},
learnMagic: {
    text: "You learn powerful Elven magic, becoming a master of the mystical arts!",
    choices: ["Ending 3"],
    image: "https://i.ebayimg.com/images/g/8tgAAOSw~C5i4FhL/s-l1200.webp",
},
joinGuardians: {
    text: "You join the Forest Guardians, protecting the realm from dark forces!",
    choices: ["Ending 4"],
    image: "https://www.catiriartoasis.com/uploads/1/2/2/6/122674473/s179239089226630519_p1274_i85_w539.jpeg",
},
ancientArtifact: {
    text: "You discover an ancient artifact, unlocking hidden powers within you!",
    choices: ["Ending 5"],
    image: "https://www.awexley.com/wp-content/uploads/2022/03/block-artifact-hunters-pichi.jpg",
},
imprisonedDragon: {
    text: "You free an imprisoned dragon, who becomes your loyal companion and ally!",
    choices: ["Ending 6"],
    image: "https://ik.imagekit.io/storybird/images/d5e39b3e-9dc7-48e0-a9fc-bce407d8162e/0_997207522.png",
},
lostKnowledge: {
    text: "You uncover lost knowledge, becoming the wisest scholar in the realm!",
    choices: ["Ending 7"],
    image: "https://assets-global.website-files.com/5bfd5ccdddc00c144ef694a4/5bfee1c54b33c858d4be6e87_Restoring-Lost-Knowledge-for-Personal-Health-and-Corporate-Wellness.jpeg",
},
secretPassage: {
    text: "You find a secret passage leading to untold adventures and treasures!",
    choices: ["Ending 8"],
    image: "https://images.pond5.com/ancient-secret-passage-footage-032499584_iconl.jpeg",
},

};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;

  
}

startGame();
