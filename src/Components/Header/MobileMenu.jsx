"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Mobile nav aligned to HeaderOne structure
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'House of Andalus', href: '/the-house' },
  {
    label: 'Book a Stay',
    children: [
      { label: 'Book a Private Stay', href: '/book-your-stay/booking-form' },
      { label: 'Book a Retreat with Us', href: '/book-your-stay#upcoming-2026' },
      { label: 'Organise Your Own Retreat', href: '/book-your-stay/organize-your-own-retreat' },
      { label: 'House of Andalus Retreat', href: '/book-your-stay/House-of-andulus-retreats' },
      { label: 'Book Olive Tree', href: '/book-and-olive-tree' },
      { label: 'Book Olive Tree Form', href: '/book-and-olive-tree/form' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Blog',
    children: [
      { label: 'Follow Henrietta blog', href: 'https://henriettaszovati.com/', external: true },
      { label: 'Development of the House', href: 'https://thehouseofandalus.substack.com/', external: true },
    ],
  },
  { label: 'Contact us', href: '/contact' },
];

function MobileMenu({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRefs = useRef({});

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  // Animate submenu height
  useEffect(() => {
    Object.keys(menuRefs.current).forEach((key) => {
      const submenu = menuRefs.current[key];
      if (submenu) {
        submenu.style.height = activeMenu == key ? `${submenu.scrollHeight}px` : '0px';
      }
    });
  }, [activeMenu]);

  return (
    <div
      className={`th-menu-wrapper onepage-nav ${isOpen ? 'th-body-visible' : ''}`}
      style={{ visibility: isOpen ? 'visible' : 'hidden' }}
    >
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={onClose} aria-label="Close">
          <i className="fal fa-times" />
        </button>

        <div className="mobile-logo">
          <Link href="/">
            <img src="/assets/img/redlogo.png" alt="House of Andalus" style={{ width: '94px', height: 'auto' }} />
          </Link>
        </div>

        <div className="th-mobile-menu">
          <ul>
            {menuItems.map((item, idx) => {
              const hasChildren = Array.isArray(item.children);
              const key = idx + 1;
              if (!hasChildren) {
                return (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                );
              }
              return (
                <li
                  key={item.label}
                  className={`menu-item-has-children th-item-has-children ${activeMenu === key ? 'th-active' : ''}`}
                >
                  <Link href="#" onClick={() => toggleMenu(key)}>
                    {item.label}
                  </Link>
                  <ul
                    ref={(el) => (menuRefs.current[key] = el)}
                    className="th-submenu"
                    style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease-in-out' }}
                  >
                    {item.children.map((child) => {
                      if (child.external) {
                        return (
                          <li key={child.label}>
                            <a href={child.href} target="_blank" rel="noreferrer">
                              {child.label}
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li key={child.label}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-3">
          <Link href="/book-and-olive-tree" className="th-btn style1 w-100">
            Book a Tree
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
