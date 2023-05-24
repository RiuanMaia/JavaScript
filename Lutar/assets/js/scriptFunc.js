const char = createKnight("Riuanzin");
const monster = littleMonster();

stage.start(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
)
