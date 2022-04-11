import dyingLight from './images/box/DyingLight2.webp';
import eldenRing from './images/box/EldenRing.webp';
import farmingSimulator22 from './images/box/FarmingSimulator22.webp';
import ghostwireTokyo from './images/box/GhostwireTokyo.jpeg';
import godOfWar from './images/box/GodOfWar.webp';
import deadCells from './images/box/DeadCells.jpg';
import metroExodus from './images/box/MetroExodus.jpg';
import witcher3 from './images/box/Witcher3.jpg';
import falloutNewVegas from './images/box/FNV.webp';
import haloMCC from './images/box/HaloMCC.png';
import redDead2 from './images/box/RDR2.jpg';
import left4Dead2 from './images/box/L4D2.jpeg';
import amongUs from './images/box/AmongUs.jpeg';
import bindingOfIsaac from './images/box/BOI.jpg'
import hollowKnight from './images/box/HollowKnight.jpg';
import battlefield2042 from './images/box/Battlefield2042.jpg';
import hades from './images/box/Hades.jpg';
import wreckfest from './images/box/Wreckfest.jpg';
import sekiro from './images/box/Sekiro.jpg';
import borderlands3 from './images/box/Borderlands3.jpg';

import dylingLightCover from './images/cover/DyingLight2Cover.jpg';
import eldenRingCover from './images/cover/EldenRingCover.jpg';
import farmingSimulator22Cover from './images/cover/FarmingSimulator22Cover.jpg';
import ghostwireTokyoCover from './images/cover/GhostwireTokyoCover.jpg';
import godOfWarCover from './images/cover/GodOfWarCover.jpg';

const featured = [
    {name: 'Dying Light 2: Stay Human', src: dyingLight, featured: dylingLightCover, price: 54.99, description: 'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.'},
    {name: 'Elden Ring', src: eldenRing, featured: eldenRingCover, price: 49.99, description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.'},
    {name: 'Farming Simulator 22', src: farmingSimulator22, featured: farmingSimulator22Cover,  price: 34.99, description: 'Create your farm and let the good times grow! Harvest crops, tend to animals, manage productions, and take on seasonal challenges.'},
    {name: 'Ghostwire: Tokyo', src: ghostwireTokyo, featured: ghostwireTokyoCover,  price: 49.99, description: "Tokyo's population has vanished, and deadly supernatural forces prowl the streets. Use an arsenal of elemental abilities to unravel the truth behind the disappearance and save Tokyo."},
    {name: 'God Of War', src: godOfWar, featured: godOfWarCover,  price: 39.99, description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same."},
    {name: 'Dead Cells', src: deadCells, price: 21.99, description: "Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you are able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat."},
    {name: 'Metro Exodus', src: metroExodus, price: 24.99, description: "Flee the shattered ruins of the Moscow Metro and embark on an epic, continent-spanning journey across the post-apocalyptic Russian wilderness. Explore vast, non-linear levels, lose yourself in an immersive, sandbox survival experience, and follow a thrilling story-line that spans an entire year in the greatest Metro adventure yet."},
    {name: 'The Witcher 3: Wild Hunt', src: witcher3, price: 34.99, description: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world."},
    {name: 'Fallout: New Vegas', src: falloutNewVegas, price: 7.99, description: "Welcome to Vegas. New Vegas. Enjoy your stay!"},
    {name: 'Halo: The Master Chief Collection', src: haloMCC, price: 29.99, description: "The Master Chief's iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you're a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience."},
    {name: 'Red Dead Redemption 2', src: redDead2, price: 54.99, description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online."},
    {name: 'Left 4 Dead 2', src: left4Dead2, price: 7.19, description: "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns."},
    {name: 'Among Us', src: amongUs, price: 3.99, description: "An online and local party game of teamwork and betrayal for 4-15 players...in space!"},
    {name: 'The Binding of Isaac: Rebirth', src: bindingOfIsaac, price: 10.99, description: "The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac on his journey players will find bizarre treasures that change Isaac's form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets and fight his way to safety."},
    {name: 'Hollow Knight', src: hollowKnight, price: 10.99, description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style."},
    {name: 'Battlefield 2042', src: battlefield2042, price: 49.99, description: "Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal."},
    {name: 'Hades', src: hades, price: 19.49, description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre."},
    {name: 'Wreckfest', src: wreckfest, price: 26.74, description: "Wreckfest is a demolition derby themed racing game with soft-body damage modeling, sophisticated driving dynamics and in-depth vehicle upgrading, featuring both demolition derbies and more traditional track races. It's all about fun, breakneck racing and over-the-top crashes."},
    {name: 'Sekiro: Shadows Die Twice', src: sekiro, price: 49.90, description: "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously."},
    {name: 'Borderlands 3', src: borderlands3, price: 49.99, description: "The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure! Blast through new worlds and enemies as one of four new Vault Hunters."},
]

export default featured;