import { Injectable } from '@angular/core';
import { Tour } from '../../shared/models/tours';
@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor() { }

getTourByName(name:string):Tour{
  return this.getAll().find(tour=> tour.name == name)!;
}

  getAll():Tour[]{
    return [
{
  
    id:1,
    name: 'Courtyards & Verandahs',
    description: 'Sri Lanka’s most renowned architect Geoffrey Bawa redefined and influenced South-East Asian',
    imageUrl:'/knuckels.jpg',
    iframe:'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2029644.1943509448!2d79.20118065242973!3d6.502837818003945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!5e0!3m2!1sen!2slk!4v1737540226274!5m2!1sen!2slk' ,
    stars:4,
    descriptionPointsSection1: [
      'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
      'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
      'Our lodges redefine wilderness luxury with unparalleled comfort and style.'
    ],
    descriptionPointsSection2: [
      'If you crave close encounters with diverse ecosystems, this trip is your gateway to thriving biodiversity. From lush jungles to azure oceans, nature unfolds at its best.',
      'Capture breathtaking moments as wildlife roams freely against stunning backdrops. Our safari experiences provide ample opportunities for photography enthusiasts to hone their skills in the wild.',
      'Despite the wild setting, enjoy the lap of luxury. Our accommodations prioritize comfort, ensuring a rejuvenating stay after exciting adventures. Pamper yourself with exquisite amenities amid nature’s grandeur.'
    ],
    inclusions : [
      {
        mealDes:'Tailored to Your Preference' ,
        transportDes: 'Private Air-Conditioned Vehicle for Transfers and Sightseeing', 
        accommodateDes:'Hotel (9 nights)', 
        activityDes:[
        'Colombo City Tour',
        'Safari at the Minneriya National Park',
        'Sigiriya Rock Fortress',
     ]
     }
     
    ],
    itinerary: [
      {
        day: 1,
        details: 'Airport → Colombo',
        description: 'Start your journey with a scenic drive from the airport to Colombo.',
        imageUrl: '/assets/images/colombo.jpg',
      },
      {
        day: 2,
        details: 'Colombo → Galle',
        description: 'Explore the colonial city of Galle and its historic fort.',
        imageUrl: '/assets/images/galle.jpg',
      },
      // Add more days as needed
      {
        day: 3,
        details: 'Colombo → Galle',
        description: 'Explore the colonial city of Galle and its historic fort.',
        imageUrl: '/assets/images/galle.jpg',
      },
    ],

  
},

{
  
  id:2,
  name: 'Cycling in Sri Lanka Tour',
  description: 'Sri Lanka’s most renowned architect Geoffrey Bawa redefined and influenced South-East Asian',
  imageUrl:'/sigiriya.jpg',
  stars:5,
  iframe:'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2029644.1943509448!2d79.20118065242973!3d6.502837818003945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!5e0!3m2!1sen!2slk!4v1737540226274!5m2!1sen!2slk',



},
{
  
  id:3,
  name: 'Everlasting Summer in Lanka',
  description: 'Sri Lanka’s most renowned architect Geoffrey Bawa redefined and influenced South-East Asian',
  imageUrl:'/knuckels.jpg',
  stars:4,
  iframe:'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2029644.1943509448!2d79.20118065242973!3d6.502837818003945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!5e0!3m2!1sen!2slk!4v1737540226274!5m2!1sen!2slk' ,


},
{
  
  id:4,
  name: 'Experiential East',
  description: 'Sri Lanka’s most renowned architect Geoffrey Bawa redefined and influenced South-East Asian',
  imageUrl:'/sigiriya.jpg',
  stars:4,
  iframe:'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2029644.1943509448!2d79.20118065242973!3d6.502837818003945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!5e0!3m2!1sen!2slk!4v1737540226274!5m2!1sen!2slk' ,

},
{
  
  id:5,
  name: 'Fabulous Sri Lanka',
  description: 'Sri Lanka’s most renowned architect Geoffrey Bawa redefined and influenced South-East Asian',
  imageUrl:'/knuckels.jpg',
  stars:4,
  iframe:'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2029644.1943509448!2d79.20118065242973!3d6.502837818003945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!5e0!3m2!1sen!2slk!4v1737540226274!5m2!1sen!2slk' ,


},
{
  
  id:6,
  name: 'Love Songs of Ceylon',
  description: 'Sri Lanka’s most renowned architect Geoffrey Bawa redefined and influenced South-East Asian',
  imageUrl:'/sigiriya.jpg',
  stars:4,
  iframe:'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2029644.1943509448!2d79.20118065242973!3d6.502837818003945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!5e0!3m2!1sen!2slk!4v1737540226274!5m2!1sen!2slk' ,

}

    ]
  }
}
