const POOLS_TRAITS = new Map([
    ['A3C',[
		{'Background': 'Late Night'},
		{'Background': 'Happy Trees - JES Art'},
		{'Background': 'Brickwall'},
		{'Background': 'Consensus 2022 Uncommon'},
		{'Background': 'Jackson Pollock'},
		{'Background': 'Orange'},
		{'Background': 'Stickers'},
		{'Background': 'Neon'},
		{'Background': 'Blue Grid'},
		{'Eyes': 'Hoskytwo Eyes'},
		{'Fur': 'Pink'},
		{'Fur': 'Coyote'},
		{'Fur': 'Coqui'},
		{'Ear Decoration': 'Beauty Mark'},
		{'Hat': 'Crown'},
		{'Hat': 'Mardis Gras Hat'},
		{'Hat': 'Trash Can Lid'},
		{'Hat': 'Forest Camo'},
		{'Hat': 'TBLH Hat'},
		{'Mouth': 'Rob Boss Beard'},
		{'Mouth Decoration': 'Big Moustache'},
		{'Neck':'Blue Collar'},
		{'Neck':'Vicar'},
		{'Neck':'The Fools Neck'},
		{'Glasses': 'Visor Dead'},
		{'Glasses': 'Fighter Pilot Glasses'},
		{'Frame': 'Damien Hirst'},
		{'Frame': 'Consensus 2022'},
		{'Frame': 'Dice'},
		{'Frame': 'Newspaper'},
		{'Frame': 'Fingerpaint'},
		{'Frame': 'Crypto Magazine'}]],
    ['BONE',[
		{'Background': 'Poo'},
		{'Background': 'This is Fine'},
		{'Background': 'Ukraine'},
		{'Background': 'Spamdle'},
		{'Background': 'Busy'},
		{'Background': 'Fluorescent Gradient'},
		{'Background': 'Sunset Tones Gradient'},
		{'Background': 'Livestream'},
		{'Background': 'Obsidian'},
		{'Eyes': 'Bloodyhell'},
		{'Fur': 'Baby Blue'},
		{'Fur': 'Scruff'},
		{'Ear Decoration': 'Bandaged Ear Right'},
		{'Hat': 'Police'},
		{'Hat': 'Holographic Hat'},
		{'Hat': 'Blue Hat'},
		{'Hat': 'Beret'},
		{'Hat': 'Chef Hat'},
		{'Hat': 'Annie Hat'},
		{'Hat': 'Bloody Arrow'},
		{'Mouth': 'Hmmm'},
		{'Mouth Decoration': 'Tongue Out'},
		{'Neck':'Faux Rug Survivor'},
		{'Glasses': 'Cyber Hosky 2.0'},
		{'Glasses': 'Sunset Glasses'},
		{'Frame': 'Check Mate'},
		{'Frame': 'Mega Pint'},
		{'Frame': 'FIRED!'},
		{'Frame': 'Hosky 2000 Computer'},
		{'Frame': 'Retro Coins'},
		{'Frame': 'Aboslutely'}]],
    ['LIDO',[
		{'Background': 'Red'},
		{'Background': 'Fireworks'},
		{'Background': 'Pastel'},
		{'Background': 'Salvador Hosky'},
		{'Background': 'Bright Blue Green Gradient'},
		{'Eyes': 'Charles Eyes'},
		{'Eyes': 'Grinch Eyes'},
		{'Eyes': 'Were Eyes'},
		{'Eyes': 'Ukraine Eyes'},
		{'Eyes': 'Knitted Eyes'},
		{'Eyes': 'Heterochromia'},
		{'Fur': 'White'},
		{'Fur': 'Turtle'},
		{'Ear Decoration': 'Biggie Hair'},
		{'Hat': 'Top Hat Red'},
		{'Hat': 'Gold Ribbon Hat'},
		{'Hat': 'Pork Pie Hat'},
		{'Hat': 'Bicycle Helmet Orange'},
		{'Mouth': 'Sad'},
		{'Mouth': 'Zipped'},
		{'Mouth Decoration': 'Sick'},
		{'Mouth Decoration': 'Bubblegum'},
		{'Neck':'Black and White Jester Neck'},
		{'Neck':'1rd Place Medal'},
		{'Glasses': 'Visor Heart'},
		{'Glasses': 'Goggles'},
		{'Frame': 'Fish Bowl'},
		{'Frame': 'Traditional Painting'},
		{'Frame': 'Copper'},
		{'Frame': 'Cocktail'},
		{'Frame': 'Sticker'},
		{'Frame': 'Hosky Blocks'},
		{'Frame': 'Catastrophe'}]],
    ['CHEF',[
		{'Background': 'Blue'},
		{'Background': 'Consensus 2022 Rare'},
		{'Background': 'Black Radioactive Animated'},
		{'Background': 'Underwater Animated'},
		{'Background': 'Radioactive Yellow Animated'},
		{'Background': 'Duplicate'},
		{'Eyes': 'White Eyes'},
		{'Eyes': 'Hoskasaur Eyes'},
		{'Eyes': 'Hoskrogu Eyes'},
		{'Eyes': 'Coyote Eyes'},
		{'Fur': 'Bear'},
		{'Fur': 'Grey'},
		{'Ear Decoration': 'Bandaged Ear Left'},
		{'Hat': 'Miner'},
		{'Hat': 'Black Lunar New Year Hat'},
		{'Hat': 'Yellow Feather Hat'},
		{'Hat': 'Dune'},
		{'Mouth': 'Banksy Mouth'},
		{'Mouth': 'Gherkin Mouth'},
		{'Mouth Decoration': 'Pizza'},
		{'Mouth Decoration': 'Bubblegum Popped'},
		{'Neck':'Rug Pool Bowl'},
		{'Glasses': 'Gold Glasses'},
		{'Glasses': 'Neistat'},
		{'Frame': 'Lunar New Year Gold'},
		{'Frame': 'Fools Gold'},
		{'Frame': 'Suits'},
		{'Frame': 'Joker'},
		{'Frame': 'Stamp'},
		{'Frame': 'Rug Me Daddy!'},
		{'Frame': 'Prison Bars'},
		{'Frame': 'NGMI'}]],
    ['FARM',[
		{'Background': 'Khaki'},
		{'Background': 'Fireplace'},
		{'Background': 'Red Gradient'},
		{'Background': 'Iris'},
		{'Background': 'Green Purple Gradient'},
		{'Background': 'Granite'},
		{'Background': 'Cosmos'},
		{'Eyes': 'Black Eye'},
		{'Fur': 'Gold'},
		{'Fur': 'Ginger'},
		{'Ear Decoration': 'Candle Right'},
		{'Hat': 'Robin Hood'},
		{'Hat': 'Martian'},
		{'Hat': 'Karen'},
		{'Hat': 'Buffon Hat'},
		{'Hat': 'Prisoner 42069'},
		{'Hat': 'Afro'},
		{'Hat': 'Rainbow Hat'},
		{'Hat': 'Lawyer Wig'},
		{'Mouth': 'Snowman'},
		{'Mouth': 'Sausage'},
		{'Mouth': 'Duckface'},
		{'Mouth': 'Uncertain'},
		{'Mouth': 'Blingin\''},
		{'Mouth Decoration': 'Flaming Hot'},
		{'Neck':'Blue Collar Gold Spikes'},
		{'Glasses': 'Visor Beam'},
		{'Glasses': 'Pilot Glasses Tinted'},
		{'Frame': 'Poo'},
		{'Frame': 'Food'},
		{'Frame': 'Zero'}]],
    ['BAIDU',[
		{'Background': 'Yellow'},
		{'Background': 'Landscape'},
		{'Background': 'FIAT'},
		{'Background': 'Slate'},
		{'Background': 'Press Start'},
		{'Background': 'Field Gradient'},
		{'Eyes': 'Beatenup'},
		{'Fur': 'Tiger Fur'},
		{'Fur': 'Gold Tiger'},
		{'Fur': 'Imagine Dragons'},
		{'Fur': 'Panda'},
		{'Fur': 'Clay Face'},
		{'Ear Decoration': 'Stud Right'},
		{'Hat': 'Trucker'},
		{'Hat': 'Bison'},
		{'Hat': 'Robin Hood Error'},
		{'Hat': 'Racing Helmet'},
		{'Hat': 'Black and White Jester'},
		{'Hat': 'Santa Hat Error'},
		{'Hat': 'Tea Cup World\'s Best Coder'},
		{'Hat': 'Black Mask'},
		{'Hat': 'Dumpling'},
		{'Mouth': 'Sad-Ish'},
		{'Mouth': 'Robot Mouth'},
		{'Mouth': 'Clown Mouth'},
		{'Mouth': 'Snarl'},
		{'Mouth Decoration': 'Strawberry'},
		{'Neck':'Trash Can'},
		{'Glasses': 'Lennon'},
		{'Glasses': 'Asymmetrical Glasses'},
		{'Frame': 'Astronaut'},
		{'Frame': 'Vegas Computer'},
		{'Frame': 'Another Holiday'}]],
    ['DDOS',[
		{'Background': 'Grey'},
		{'Background': 'Deep Green'},
		{'Background': 'Dimalix'},
		{'Fur': 'Blue Dog'},
		{'Fur': 'Skull'},
		{'Fur': 'NSFW'},
		{'Ear Decoration': 'White Earphones'},
		{'Hat': 'Hero'},
		{'Hat': 'Red Wooly Hat'},
		{'Hat': 'Blue Wooly Hat'},
		{'Hat': 'Hero 2'},
		{'Hat': 'Cowboy Hero'},
		{'Mouth': 'LED Mouth'},
		{'Mouth': 'Dollar Mouth'},
		{'Mouth': 'Stitched Up'},
		{'Mouth Decoration': 'Goatee'},
		{'Neck':'Bow Tie'},
		{'Neck':'Red Collar Gold Spikes'},
		{'Glasses': 'Visor Meh'},
		{'Glasses': 'Stitches'},
		{'Glasses': 'Hero Mask'},
		{'Frame': 'Wood'},
		{'Frame': 'Balloon'},
		{'Frame': 'Jigsaw'}]],
    ['ITZA',[
		{'Background': 'Mint'},
		{'Background': 'Full Moon'},
		{'Background': 'Light Speed'},
		{'Background': 'Gold Frameception'},
		{'Background': 'Consensus 2022 Common'},
		{'Background': 'GN'},
		{'Background': 'Highly Classified'},
		{'Background': 'GM'},
		{'Eyes': 'Knackered'},
		{'Fur': 'Señor Josquí'},
		{'Fur': 'Flaming Hot'},
		{'Fur': 'Hosky Sticker'},
		{'Fur': 'Cerberosky'},
		{'Ear Decoration': 'Double Stud Left'},
		{'Hat': 'Viking'},
		{'Hat': 'Elf Hat'},
		{'Hat': 'King Tutankhamun'},
		{'Hat': 'Silver Crown Error'},
		{'Hat': 'Miner Error'},
		{'Hat': 'Flat Peak Error'},
		{'Hat': 'Elf Hat Error'},
		{'Hat': 'Bandana Error'},
		{'Hat': 'Viking Error'},
		{'Hat': 'Top Hat Blue Error'},
		{'Hat': 'Party Hat'},
		{'Hat': 'Head Wrap'},
		{'Mouth Decoration': 'Burgundy Moustache'},
		{'Neck':'Diamond Chain'},
		{'Neck':'Robot Bowtie'},
		{'Neck':'Green Poncho'},
		{'Glasses': 'Laser Visor'},
		{'Glasses': 'Yellow Laser Error'},
		{'Glasses': 'Green Laser Error'},
		{'Glasses': 'Back To The Future Error'},
		{'Glasses': 'Red Laser Error'},
		{'Glasses': 'Blue Laser Error'},
		{'Glasses': 'Visor Animated'},
		{'Glasses': 'Pilot Glasses Classic'},
		{'Frame': 'Silver'},
		{'Frame': 'Glass Jarsky'},
		{'Frame': 'Wen'}]],
    ['HAZEL',[
		{'Background': 'Peach'},
		{'Background': 'Wernis'},
		{'Background': 'Epilogue'},
		{'Background': 'Pernis'},
		{'Background': 'Notepad'},
		{'Eyes': 'Overload'},
		{'Fur': 'Oscar'},
		{'Fur': 'Charles Mask'},
		{'Fur': 'Glow In The Dark Skull'},
		{'Ear Decoration': 'Right Ring'},
		{'Hat': 'McDonalds'},
		{'Hat': 'Sombrero'},
		{'Hat': 'Tea Cup'},
		{'Hat': 'Rob Boss'},
		{'Hat': 'McDonalds Error'},
		{'Hat': 'Captain Error'},
		{'Hat': 'Top Hat Red Error'},
		{'Hat': 'Crown Error'},
		{'Hat': 'Hero Error'},
		{'Hat': 'Poo Hat Error'},
		{'Hat': 'Hero 2 Error'},
		{'Hat': 'Gladiator Mask'},
		{'Mouth Decoration': 'Handlebar Moustache'},
		{'Neck':'2st Place Medal'},
		{'Neck':'1rd Chain'},
		{'Neck':'Poo Bowtie'},
		{'Neck':'Blue Bowtie'},
		{'Neck':'Bubblebath'},
		{'Neck':'Trash Can'},
		{'Glasses': 'Blue Laser'},
		{'Glasses': 'Eyepatch Right Error'},
		{'Glasses': 'Upside Down Error'},
		{'Glasses': 'Eyepatch Left Error'},
		{'Glasses': '3D Gloss Error'},
		{'Glasses': 'Retro Rainbow Eyes'},
		{'Glasses': 'Eyes Patched Error'},
		{'Glasses': 'Thug Life Error'},
		{'Glasses': 'Dude Error'},
		{'Glasses': 'Love Error'},
		{'Frame': 'Playing Card'},
		{'Frame': '!%*@#?'},
		{'Frame': 'Crypto Ticker'}]],
    ['PRIDE',[
		{'Background': 'Cyan'},
	    {'Background': 'Pop Art'},
		{'Eyes': 'Overload'},
		{'Eyes': 'Flaming Hot Eyes'},
		{'Eyes': 'Cact-eyes'},
		{'Fur': 'Doberman'},
		{'Fur': 'LED'},
		{'Ear Decoration': 'Candle Middle'},
		{'Hat': 'Black Lunar New Year Hat'},
		{'Hat': 'Fez'},
		{'Hat': 'Dank Hat'},
		{'Mouth': 'Ooooo'},
		{'Mouth Decoration': 'Rainbow Vomit'},
		{'Neck':'Neckerchief'},
		{'Glasses': 'Back To The Future'},
		{'Glasses': 'Broken Pilot Glasses'},
		{'Frame': 'Wernis'},
		{'Frame': 'Felt'},
		{'Frame': 'Sunlight'}]],
    ['PSB',[
		{'Background': 'Prison'},
	    {'Background': 'Matrix'},
	    {'Background': 'Blue Stepped Gradient'},
		{'Eyes': 'Pink Eye'},
		{'Eyes': 'Spicy Eyes'},
		{'Fur': 'Hoskasaur'},
		{'Fur': 'Knitted'},
		{'Fur': 'Crazy Mary'},
		{'Ear Decoration': 'Stud Left'},
		{'Hat': 'Red Lunar New Year Hat'},
		{'Hat': 'HoskyMando'},
		{'Hat': 'Red Wooly Hat Error'},
		{'Hat': 'Squid Game Triangle'},
		{'Hat': 'Reindeer Error'},
		{'Hat': 'Horns'},
		{'Mouth': 'Happy'},
		{'Mouth Decoration': 'Fighter Pilot Mask'},
		{'Neck':'Blue Poncho'},
		{'Glasses': '3D Gloss'},
		{'Frame': 'Lunar New Year Wave'},
		{'Frame': 'Thinking'}]],
    ['PSYA',[
		{'Background': 'Red'},
		{'Background': 'Black Radioactive'},
		{'Background': 'Carbon Fiber'},
		{'Background': 'Radioactive Yellow'},
		{'Background': 'Blue Yellow Gradient'},
		{'Eyes': 'Pink Eye'},
		{'Eyes': 'Hypno Eyes'},
		{'Fur': 'Yellow Dog'},
		{'Fur': 'Radioactive Orange'},
		{'Fur': 'Family'},
		{'Ear Decoration': 'Diamond Stud'},
		{'Hat': 'Spin Top'},
		{'Hat': 'Santa Hat'},
		{'Hat': 'McDonalds Manager'},
		{'Hat': 'Purple Hat'},
		{'Hat': 'Fighter Pilot'},
		{'Mouth Decoration': 'Crumpet'},
		{'Neck':'Gold Bowtie'},
		{'Glasses': 'Upside Down'},
		{'Frame': 'Frosty'},
		{'Frame': 'Zeros Around the World'},
		{'Frame': 'Banksy Tribute'}]],
    ['QCPOL',[
		{'Background': 'Sunset'},
		{'Background': 'Morning Gradient'},
		{'Eyes': 'Crazy Eyes'},
		{'Fur': 'Hoskrogu'},
		{'Fur': 'Frankenhosk'},
		{'Ear Decoration': 'Double Stud Right'},
		{'Hat': 'Captain'},
		{'Hat': 'Squid Game Square Error'},
		{'Hat': 'Squid Game Circle Error'},
		{'Hat': 'Squid Game Triangle Error'},
		{'Hat': 'Squid Game'},
		{'Hat': 'Third Ear Green'},
		{'Hat': 'Squid Game Error'},
		{'Hat': 'Pumpkin'},
		{'Hat': 'Pumpkin 2'},
		{'Mouth Decoration': 'Cigar'},
		{'Neck':'Red Collar'},
		{'Neck':'Chain'},
		{'Glasses': 'Visor'},
		{'Frame': 'Pernis'},
		{'Frame': 'Think S#!tty'}]],
    ['RARE',[
		{'Background': 'Deep Purple'},
		{'Background': 'Lunar New Year Red'},
		{'Background': 'Escher'},
		{'Background': 'Neon Gradient'},
		{'Background': 'Halloween'},
		{'Background': 'Beach'},
		{'Background': 'Earth'},
		{'Background': 'Web'},
		{'Background': 'Film Noir'},
		{'Background': 'Peace'},
		{'Background': 'Glowing Pyramids'},
		{'Background': 'Maffs'},
		{'Background': 'Circles Animated'},
		{'Background': 'Hosky Island'},
		{'Fur': 'Raccoon'},
		{'Fur': 'Red Panda'},
		{'Ear Decoration': 'Left Ring'},
		{'Ear Decoration': 'Solar Panels'},
		{'Ear Decoration': 'Spider Legs'},
		{'Ear Decoration': 'Dizzy'},
		{'Hat': 'Green Hat'},
		{'Hat': 'Light Blue Hat'},
		{'Hat': 'Not Megaman'},
		{'Hat': 'Orange Hoodie'},
		{'Hat': 'Spin Top Error'},
		{'Hat': 'Police Error'},
		{'Hat': 'Sweatband Error'},
		{'Hat': 'Bicycle Helmet Red'},
		{'Hat': 'Poo Cap'},
		{'Hat': 'Football Helmet'},
		{'Mouth': 'Good Boy'},
		{'Mouth Decoration': 'Taco'},
		{'Mouth Decoration': 'Shizzle'},
		{'Neck':'Medicine Barrel'},
		{'Glasses': 'Eyes Patched'},
		{'Glasses': 'Dude'},
		{'Glasses': 'Not A Red Turtle'},
		{'Glasses': 'Not A Orange Turtle'},
		{'Glasses': 'Not A Purple Turtle'},
		{'Glasses': 'Not A Blue Turtle'},
		{'Glasses': '3D Glasses Error'},
		{'Glasses': 'Black Lennons'},
		{'Frame': 'Orange Hazmat Suit'},
		{'Frame': 'Trick'}]],
    ['SALT',[
		{'Background': 'Purple'},
	    {'Background': 'Orchid'},
		{'Fur': 'Hosky Droid'},
		{'Fur': 'Original OAP'},
		{'Eyes': 'Crazy Eyes'},
		{'Eyes': 'Vegas Eyes'},
		{'Eyes': 'Coqui Eyes'},
		{'Ear Decoration': 'Double Left Rings'},
		{'Hat': 'Top Hat Blue'},
		{'Hat': 'Tiger Hat'},
		{'Hat': 'Micky'},
		{'Hat': 'YOLO Hat'},
		{'Hat': 'Desert Camo'},
		{'Mouth Decoration': 'Beard'},
		{'Neck':'Hosk Chain'},
		{'Glasses': '3D Glasses'},
		{'Glasses': 'Monocle'},
		{'Frame': 'Candy Cane'},
		{'Frame': 'Out Of Ink'}]],
    ['SEA',[
		{'Background': 'Navy'},
		{'Background': 'Green Gradient'},
		{'Background': 'Extra Stank'},
		{'Background': 'Ganja'},
		{'Background': 'Blue Purple Gradient'},
		{'Background': 'Jes Art'},
		{'Eyes': 'Dizzy Eyes'},
		{'Eyes': 'Hypno Dizzy Eyes'},
		{'Eyes': 'Brown Eyes'},
		{'Eyes': 'Rolls Eyes'},
		{'Eyes': 'Stoned Eyes'},
		{'Fur': 'Holographic'},
		{'Fur': 'Red Tiger'},
		{'Fur': 'Hoskytwo'},
		{'Fur': 'Unknown'},
		{'Fur': 'Ghosky'},
		{'Fur': 'Cardoggo'},
		{'Fur': 'Vasil Mask'},
		{'Fur': 'War Paint'},
		{'Ear Decoration': 'Double Bandaged Ears'},
		{'Hat': 'Reindeer'},
		{'Hat': 'Silver Crown'},
		{'Hat': 'Hosk Cap'},
		{'Hat': 'Halo'},
		{'Hat': 'Neon Sphinx Hat'},
		{'Hat': 'Trent Barnes'},
		{'Mouth': 'Knitted Mouth'},
		{'Mouth Decoration': 'Snorkel'},
		{'Neck':'Cone'},
		{'Glasses': 'Eyepatch Right'},
		{'Glasses': 'Eyepatch Left'},
		{'Glasses': 'Red Laser'},
		{'Glasses': 'Tears'},
		{'Frame': 'Test Card'},
		{'Frame': 'Flies'},
		{'Frame': 'Flies Animated'}]],
    ['STOIC',[
		{'Background': 'Space'},
		{'Background': 'Fireworks Lunar New Year'},
		{'Background': 'Race Track'},
		{'Background': 'Starry Night'},
		{'Background': 'Pink Gradient'},
		{'Background': 'Orange Pink Gradient'},
		{'Fur': 'Robot'},
		{'Fur': 'Golden'},
		{'Eyes': 'Whatsthat'},
		{'Eyes': 'Popped Eye'},
		{'Eyes': 'Envy Eyes'},
		{'Eyes': 'Sphinx Eyes'},
		{'Eyes': 'Lightning Eyes'},
		{'Ear Decoration': 'Antlers'},
		{'Hat': 'Bandana'},
		{'Hat': 'Aye Cap\'n'},
		{'Hat': 'Arrow'},
		{'Hat': 'Straw Hat'},
		{'Hat': 'Gold Poo Hat'},
	    {'Mouth': 'Yeh But No'},
		{'Mouth Decoration': 'Eat Poo'},
		{'Neck':'Neck Bolts'},
		{'Glasses': 'Love'},
		{'Glasses': 'Rainbow Visor'},
		{'Glasses': 'Upside Down Right Way Up'},
		{'Frame': 'Green Hazmat Suit'},
		{'Frame': 'Wen Animated'}]],
    ['VEGAS',[
		{'Background': 'Baby Blue'},
		{'Background': 'Vegas'},
		{'Background': 'Lunar New Year Blue'},
		{'Background': 'Underwater'},
		{'Background': 'April Fools'},
		{'Background': 'Neon Pink Gradient'},
		{'Background': 'Mint Gradient'},
		{'Eyes': 'Jake Eyes'},
		{'Eyes': 'Vasil Eyes'},
		{'Eyes': 'Neon Sphinx Eyes'},
		{'Eyes': 'Hosky Island Eyes'},
		{'Eyes': 'Psychedelic Eyes'},
		{'Fur': 'Radioactive Pink'},
		{'Fur': 'Banksy'},
		{'Fur': 'Cardano Whale'},
		{'Fur': 'Werewolf'},
		{'Fur': 'Ghost Chain'},
		{'Fur': 'Vegas Mask'},
		{'Ear Decoration': 'Dizzy'},
		{'Hat': 'Flat Peak'},
		{'Hat': 'Micky Error'},
		{'Hat': 'Blood Poo Error'},
		{'Hat': 'McDonalds Manager Error'},
		{'Hat': 'HoskyFett'},
		{'Hat': 'Squid Game Circle'},
		{'Hat': 'Holographic Hat Error'},
		{'Hat': 'Squid Game Square'},
		{'Hat': 'King Tutankhamun Error'},
		{'Hat': 'The Fools Hat'},
		{'Hat': 'Splitting Headache'},
		{'Hat': 'HBI Hat'},
	    {'Mouth': 'Meh'},
		{'Mouth Decoration': 'Cigarette'},
		{'Neck':'SlumDogeEx-Millionaire'},
		{'Glasses': 'Green Laser'},
		{'Glasses': 'Heads-Up Display'},
		{'Glasses': 'Late Night Glasses'},
		{'Frame': 'Fairy Lights'},
		{'Frame': 'Ded'}]],
    ['WOOF',[
		{'Background': 'Green'},
		{'Background': 'Snowfall'},
		{'Background': 'Beige'},
		{'Background': 'Light Blue Gradient'},
		{'Background': 'Hosky Blue Gradient'},
		{'Background': 'FIN'},
		{'Eyes': 'Blue Eyes'},
		{'Eyes': 'Cyclops Eyes'},
		{'Eyes': 'White Glowing Eyes'},
		{'Eyes': 'Clown Eyes'},
		{'Eyes': 'Left or Right Eyes'},
		{'Eyes': 'Scarred Eyes'},
		{'Fur': 'Joker'},
		{'Fur': 'Original Retired'},
		{'Ear Decoration': 'Double Right Rings'},
		{'Hat': 'Sweatband'},
		{'Hat': 'Blood Poo'},
		{'Hat': 'Sweatband 2'},
		{'Hat': 'Cork Hat'},
		{'Hat': 'Sphinx Hat'},
		{'Hat': 'FUD Cap'},
		{'Hat': 'Paper Bag'},
		{'Mouth Decoration': 'Bone'},
		{'Neck':'Hawaiian'},
		{'Neck':'Black Bowtie'},
		{'Glasses': 'Thug Life'},
		{'Glasses': 'Upside Down Right Way Up'},
		{'Frame': 'Pernis Vs Wernis'},
		{'Frame': 'Golden Shine'}]],
    ['ASPEN',[
		{'Neck':'Blue Collar'},
		{'Hat':'Sweatband'},
		{'Ear Decoration':'Stud Right'},
		{'Underwater':'Underwater'},
		{'Mouth Decoration':'Taco'},
		{'Fur':'Imagine Dragons'},
		{'Ear Decoration':'Bandaged Ear Left'},
		{'Fur':'Ghost'},
		{'Hat':'Green Hat'},
		{'Glasses':'Eyes Patched'},
		{'Background':'Clouds'},
		{'Background':'Field Gradient'},
		{'Hat':'Idiot Hat'},
		{'Background':'Snowfall'},
		{'Ear Decoration':'Dizzy'},
		{'Banksy':'Banksy'},
		{'Frame':'Fingerprint'},
		{'Fur':'Fingerprint'},
		{'Hat':'Paper Bag'},
		{'Frame':'Suits'},
		{'Hat':'Pumpkin'},
		{'Fur':'Cyclops'},
		{'Background':'Peace'},
		{'Neck':'Gold Bowtie'},
		{'Eyes':'Big Eyes'},
		{'Eyes':'Twitchy Eyes'},
		{'Frame':'Crypto Magazine Special Edition'},
		{'Background':'Grey Haunted Moon'},
		{'Hat':'Holographic Hat Error'},
		{'Background':'Salvador Hosky Animated'}]],
	['GOMA',[
		{'Glasses':'3D Glasses'},
		{'Hat':'Police'},
		{'Eyes':'Black Eye'},
		{'Hat':'Sweatband 2'},
		{'Mouth Decoration':'Big Moustache'},
		{'Frame':'Cocktail'},
		{'Ear Decoration':'Double Bandaged Ears'},
		{'Frame':'Copper'},
		{'Fur':'Doodle'},
		{'Fur':'Robot'},
		{'Hat':'Beret'},
		{'Neck':'Trash Can'},
		{'Fur':'Static'},
		{'Neck':'Vicar'},
		{'Background':'Violet Stepped Gradient'},
		{'Eyes':'Cyan Glowing Eyes'},
		{'Frame':'Neon Green'},
		{'Frame':'Hosky Blocks'},
		{'Mouth Decoration':'Tongue Out'},
		{'Hat':'Fighter Pilot'},
		{'Background':'Press Start'},
		{'Eyes':'LED Eyes'},
		{'Hat':'Gladiator Mask'},
		{'Glasses':'Rainbow Visor'},
		{'Frame':'Neon Pink'},
		{'Background':'Eighties'},
		{'Background':'Fire Sky Haunted Moon'},
		{'Background':'Fireworks Lunar New Year Animated'},
		{'Background':'HOSKY Turbo'},
		{'Fur':'HOSKY Turbo'},
		{'Eyes':'HOSKY Turbo'},
		{'Mouth':'HOSKY Turbo'},
		{'Background':'Light Speed'},
		{'Background':'Water Blue Gradient'},
		{'Glasses':'Yellow Laser Error'}]],
	['HAWAK ',[
		{'Background':'Baby Blue'},
		{'Fur':'Baby Blue'},
		{'Background':'Mint'},
		{'Mouth Decoration':'Goatee'},
		{'Hat':'Captain'},
		{'Hat':'Viking'},
		{'Fur':'Panda'},
		{'Glasses':'Love'},
		{'Background':'Iris'},
		{'Glasses':'Laser Visor'},
		{'Frame':'Fish Bowl'},
		{'Neck':'Green Poncho'},
		{'Glasses':'Late Night Glasses'},
		{'Neck':'The Fools Neck'},
		{'Frame':'Astronaut'},
		{'Frame':'Crypto Magazine'},
		{'Background':'FIAT'},
		{'Background':'Radar'},
		{'Background':'Hosky Blue Gradient'},
		{'Hat':'Dank Hat'},
		{'Mouth Decoration':'Bubblegum Popped'},
		{'Eyes':'Vegas Eyes'},
		{'Glasses':'Visor Heart'},
		{'Background':'After Party'},
		{'Fur':'Gold'},
		{'Hat':'Bandana Error'},
		{'Hat':'Hero 2 Error'},
		{'Glasses':'Back To The Future Error'},
		{'Glasses':'Love Error'},
		{'Fur':'Spamsky'},
		{'Frame':'Spamsky'},
		{'Eyes':'Spamsky'},
		{'Neck':'Spamsky Bling'},
		{'Background':'Spamsky Gradient'},
		{'Mouth':'Spamsky Original'},
		{'Hat':'Spamsky Spamband'},
		{'Hat':'Squid Game'},
		{'Hat':'Squid Game Error'},
		{'Hat':'Squid Game Triangle Error'},
		{'Eyes':'Three Eyes'}]]
]);
