



class Player {

    constructor(id, name, level, maxHealth, health, img, physicalAttack, physicalDefense, magicAttack, magicDefense, gold, experience){
        this.id = id;
        this.name = name;
        this.level = level;
        this.maxHealth = maxHealth;
        this.health = health;
        this.img = img;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.magicAttack = magicAttack;
        this.magicDefense = magicDefense;
        this.gold = gold;
        this.experience = experience;
    }

    get getId(){return this.id}
    set setId(id){return this.id = id;}
    get getName(){return this.name}
    set setName(name){return this.name = name;}
    get getLevel(){return this.level}
    set setLevel(level){return this.level = level;}
    get getMaxHealth(){return this.maxHealth}
    set setMaxHealth(maxHealth){return this.maxHealth = maxHealth;}
    get getHealth(){return this.health}
    set setHealth(health){return this.health = health;}
    get getImg(){return this.img}
    set setImg(img){return this.img = img;}
    get getPhysicalAttack(){return this.physicalAttack}
    set setPhysicalAttack(physicalAttack){return this.physicalAttack = physicalAttack;}
    get getPhysicalDefense(){return this.physicalDefense}
    set setPhysicalDefense(physicalDefense){return this.physicalDefense = physicalDefense;}
    get getMagicAttack(){return this.getMagicAttack}
    set setMagicAttack(magicAttack){return this.magicAttack = magicAttack;}
    get getMagicDefense(){return this.magicDefense}
    set setMagicDefense(magicDefense){return this.magicDefense = magicDefense;}
    get getExperience(){return this.experience}
    set setExperience(experience){return this.experience = experience;}
    get getGold(){return this.gold}
    set setGold(gold){return this.gold = gold;}

}

module.exports = Player