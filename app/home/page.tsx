"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Container from '@/component/Container';
import Upcomming from '@/component/Upcomming';
import profile from '@/public/img/prf.jpg';
import face from '@/public/img/face.png';
import insta from '@/public/img/insta.jpg';
import gmail from '@/public/img/gm.png';
import linkd from '@/public/img/link.png';
import git from '@/public/img/git.png';

interface NavLink {
  label: string;
  id: string;
}

export default function Home() {
  const [showAllContainers, setShowAllContainers] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const upcommingRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks: NavLink[] = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Upcoming Projects', id: 'upcomming' },
  ];

  const handleSetActiveSection = (id: string) => {
    setActiveSection(id);
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleContainers = () => {
    setShowAllContainers(!showAllContainers);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current && upcommingRef.current) {
        const scrollY = window.scrollY;
        const projectsOffset = projectsRef.current.offsetTop - 100;
        const upcommingOffset = upcommingRef.current.offsetTop - 100;

        if (scrollY < projectsOffset) {
          setActiveSection('home');
        } else if (scrollY >= projectsOffset && scrollY < upcommingOffset) {
          setActiveSection('projects');
        } else {
          setActiveSection('upcomming');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
       <div className="flex fixed top-0  mb-10 flex-row  z-10 bg-transparent">
      <nav className=" z-10 flex- justify-between items-center mb-10 max-w-4xl w-full p-8 mb-0 mt-0 mx-auto ">
          <div className="rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800 ring-1 ring-zinc-900/5 backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 ${
                  activeSection === link.id ? 'text-teal-600' : 'text-gray-700'
                }`}
                href={`#${link.id}`}
                onClick={() => handleSetActiveSection(link.id)}
              >
                <span className="z-10 relative">{link.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="h-full w-full flex mt-5 top-5">
        <div className="fixed left-0 text-black flex mt-24 flex-col bg-white w-1/4 flex h-[3/4] ml-5 items-start justify-center rounded-lg">
          <h2 className="font-bold tracking-tight text-2xl mb-6 ml-3 mr-3">Contact</h2>
          <div className="flex flex-col">
            <div className="flex items-start justify-start ml-3 mt-3 mb-3">
              <a className="flex hover:bg-blue-50 p-2" href="https://www.facebook.com/kushal.kushkushal.58">
                <div className="flex items-center">
                  <Image className="w-8 h-8 flex" src={face} alt="facebook link" width={32} height={32} />
                  <span className="text-md ml-2">Facebook</span>
                </div>
              </a>
            </div>
            <div className="flex items-start justify-start ml-2 mt-3 mb-3">
              <a className="flex hover:bg-blue-50 p-2" href="https://www.instagram.com/avg_kannadiga/">
                <div className="flex items-center">
                  <Image className="w-8 h-8 flex" src={insta} alt="instagram link" width={32} height={32} />
                  <span className="text-md ml-2">Instagram</span>
                </div>
              </a>
            </div>
            <div className="flex items-start justify-start ml-2 mt-3 mb-3">
              <a className="flex hover:bg-blue-50 p-2" href="#">
                <div className="flex items-center">
                  <Image className="w-8 h-8 flex" src={gmail} alt="gmail link" width={32} height={32} />
                  <span className="text-md ml-2">kushkushal23112002@gmail.com</span>
                </div>
              </a>
            </div>
            <div className="flex items-start justify-start ml-2 mt-3 mb-3">
              <a className="flex hover:bg-blue-50 p-2" href="https://www.linkedin.com/in/kushal-n-8619511aa/">
                <div className="flex items-center">
                  <Image className="w-8 h-8 flex" src={linkd} alt="linkedin link" width={32} height={32} />
                  <span className="text-md ml-2">Linkedin/</span>
                </div>
              </a>
            </div>
            <div className="flex items-start justify-start ml-2 mt-3 mb-3">
              <a className="flex hover:bg-blue-50 p-2" href="https://github.com/kush-bot">
                <div className="flex items-center">
                  <Image className="w-8 h-8 flex" src={git} alt="github link" width={32} height={32} />
                  <span className="text-md ml-2">Github/</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="home" className="w-3/5 bg-white p-5 rounded lg flex ml-96 mr-3 mt-32 h-36 ronded-lg justify-between">
          <div className="flex flex-col bg-white p-3 rounded lg">
            <span className="font-bold tracking-tight text-6xl mb-2">
              Kushal
            </span>
            <span className="relative leading-7 items-center text-zinc-700 mb-5 flex-wrap">
              Creating  <a className="inline-block px-2 py-0 bg-gray-100 text-black rounded mx-1 font-bold" href="#">DefendX</a> and <a className="inline-block px-2 py-0 bg-gray-100 font-bold text-black rounded mx-1" href="#">More</a> things
              </span>
          </div>
          <div className="w-24 h-20 rounded shadow-xl ring-1 mr-20 ring-slate-900/5">
            <Image src={profile} alt="profile" width={96} height={96} />
          </div>
        </div>
      </div>

      <p className="ml-96 pl-8 text-2xl w-3/5 relative leading-relaxed mb-20 items-center text-zinc-700 flex-wrap mt-10">
        Final year engineering student at Sri Siddhartha Institute of Technology, passionate about{' '}
        <span className="inline-block px-2 py-0 bg-gray-100 text-black rounded mx-1 font-bold">web development</span> and{' '}
        <span className="inline-block px-2 py-0 bg-gray-100 text-black rounded mx-1 font-bold">cybersecurity</span>.
        Excited to craft intuitive interfaces and delve into the realm of cyber defense. Driven by a curiosity to
        explore emerging technologies and adapt to the dynamic landscape of the tech industry
      </p>

      <div id="projects" ref={projectsRef}>
        <h1 className="font-bold tracking-tight text-4xl mb-2 ml-96 pl-5 mt-8">Projects</h1>
        <div className="flex mt-4 ml-96 w-3/5 bg-gray-100 border rounded shadow-lg ring-1 mr-20 ring-slate-900/5 flex-col">
          <Container
            title="Phisy"
            description="A machine learning model for phishing link detection, integrated with a Flask web interface."
            topics={['Python3', 'Machine learning', 'cyber security', 'flask']}
          />
        </div>

        <div className="flex mt-4 ml-96 w-3/5 border rounded shadow-xl flex-col">
          <Container
            title="Student Management System"
            description="A student management system facilitating students to track and view their academic performance."
            topics={['React', 'ExpressJs', 'Mongodb', 'Nodejs', 'Full-Stack']}
          />
        </div>

        <div className="flex mt-4 ml-96 w-3/5 border rounded shadow-xl flex-col ">
          <Container title="Shell" description="A simple shell written in C++" topics={['C++', 'Unix']} />
        </div>

        {!showAllContainers ? (
          <button
            onClick={() => {
              toggleContainers();
              scrollToRef(projectsRef);
            }}
            className="mt-4 ml-96 pl-6 mb-5 text-xl text-black hover:underline focus:outline-none"
          >
            See More
          </button>
        ) : (
          <>
            <div className="flex mt-4 ml-96 w-3/5 border rounded shadow-xl flex-col ">
              <Container
                title="Chatroom"
                description="A chatroom coded in C capable of allowing multiple devices to connect"
                topics={['C', 'Unix', 'Socket Programming']}
              />
            </div>
          </>
        )}

        {showAllContainers && (
          <button
            onClick={() => {
              toggleContainers();
              scrollToRef(projectsRef);
            }}
            className="mt-4 ml-96 pl-6 mb-5 text-xl text-black hover:underline focus:outline-none"
          >
            See Less
          </button>
        )}
      </div>

      <div id="upcomming" ref={upcommingRef} className='mb-10'>
        <h1 className="font-bold tracking-tight text-4xl mb-5 ml-96 pl-5 mt-8">Upcoming Projects</h1>
        <div className="flex ml-96 w-3/5 mb-10 mt-10 h-60">
          <Upcomming
            title="Spotify Clone"
            description="A complete Spotify clone with payment feature"
            topics={['Nextjs', 'Supa Base', 'Stripe', 'Full-Stack']}
          />
          <Upcomming
            title="NextAuth"
            description="A machine learning model for phishing link detection, integrated with a Flask web interface."
            topics={['Nextjs', 'Mongodb', 'Full-Stack']}
          />
        </div>

        <div className="flex ml-96 w-3/5 mb-10 h-60">
          <Upcomming
            title="DefendX"
            description="AI-driven web application firewall."
            topics={['python', 'neural-network', 'Firewall']}
          />
          <Upcomming title="And More" description="" topics={[]} />
        </div>
      </div>
          <div className='mt-10'>
              -
           </div> 
    </div>
  );
}