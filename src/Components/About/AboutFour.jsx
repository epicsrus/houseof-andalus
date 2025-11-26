"use client";
import Link from 'next/link'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space-top" id="about-sec">
         <div className="container ">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src="/assets/img/About us/About 1.png" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/img/About us/About 2.png" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        {/* <img src="/assets/img/About us/About 3.png" alt="About" /> */}
                        <img src="/assets/img/About us/About 3.png" alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">Meet</span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           Henrietta Szovati & Ajmal Masroor 
                        </h2>
                     </div>
                     
                     <p className="pe-xl-5">
                        Welcome to our shared journey. We are Henrietta Szovati and Ajmal Masroor, partners in both life and purpose, driven by a deep commitment to personal growth, 
                        soulful living, and meaningful connection. Our paths have woven together a tapestry of experiences, blending Ajmal’s background in community leadership, public 
                        speaking and spiritual guidance with Henrietta’s expertise in coaching, writing and facilitating transformative conversations. Together, we believe in the power 
                        of solitude and reflection, as well as the richness found in community and dialogue.
                     </p>
    
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_1.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Exclusive Trip</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_2.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Safety First Always</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                        <a href="/contact" className="th-btn style3 th-icon founders-cta" aria-label="Contact With Us">Contact With Us</a>
                        {/* <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_3.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Professional Guide</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div> */}
                     </div>
                     {/* CTA moved to FoundersStory for consolidated placement */}
                  </div>
               </div>
            </div>
            {/* <div
               className=" movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
            </div> */}
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
            </div>
         </div>

         <section id="founders-story" className='mt-4' >
           <div className="container">
             <div className=" justify-content-center founders-layout">
               <div className="col-xl-11">
                 <div className="founders-body text-only">
                  {/* Henrietta block */}
                   <div className="founder-block founder-henrietta" id="henrietta-story">
                     <p className="founders-text">Henrietta brings a gentle yet incisive curiosity to everything she does. With a background in philosophy, writing, and coaching, she is passionate about helping others discover their inner truths and navigate the complexities of life. Her love for nature and quiet contemplation infuses her work with authenticity and depth, as reflected in her writing and coaching work set amidst the beauty of the mountains.</p>
                   </div>
                   {/* Ajmal block */}
                   <div className="founder-block founder-ajmal">
                     <p className="founders-text lead ">Ajmal’s story is one of service, resilience and advocacy. Known for his work as an imam, broadcaster and educator, he has dedicated his life to fostering understanding and building bridges across cultures and faiths. His approach is rooted in compassion and a thirst for justice, inspired by the landscapes of both his heritage and his travels.</p>
                   </div>
                   
                   <div className="">
                     <p className="founders-text vision">Together, we create spaces—both virtual and real—where individuals can explore, reflect, and grow. Our shared vision is to inspire people to embrace life wit all its complexities and view it as a source of renewal, to listen deeply to themselves and the world, and to live with greater courage and clarity. Whether through our retreats, workshops, talks, or our writing, we invite you to join us in discovering the lessons and joys found in everyday moments and in the changing seasons of our lives.</p>
                   </div>
                   <p className="founders-text mb-30">If you wish to learn more about our work, collaborate, or simply connect, we welcome you to reach out and join us on this journey of soulful exploration and purposeful living.</p>
                   {/* <div className="d-flex flex-column flex-sm-row align-items-center gap-3 founders-cta-wrap">
                     
                     <a href="/retreat-interest" className="th-btn style1 founders-cta-alt" aria-label="Retreat Interest">Retreat Interest</a>
                   </div> */}
                 </div>
               </div>
             </div>
           </div>
           <style jsx>{`
             .founders-story-band {
               margin-top:70px;
               padding:80px 0 72px;
               // background:linear-gradient(180deg,#ffffff 0%, #f5faf7 55%, #eef7f3 100%);
               position:relative;
               overflow:hidden;
               border-top:1px solid #e2ebe6;
               // box-shadow:0 10px 34px -12px rgba(33,69,55,0.12);
               border-radius:32px;
             }
             .founders-story-band:before {
               content:"";
               position:absolute;
               left:50%; top:0;
               transform:translateX(-50%);
               width:1200px; max-width:94%;
               height:2px;
               // background:linear-gradient(90deg,#d9e7e1 0%, #ffffff 50%, #d9e7e1 100%);
             }
             .founders-header .founders-subtitle {
               display:inline-block;
               padding:5px 14px;
               border:1px solid #dbe7e2;
               border-radius:30px;
               font-size:12px;
               letter-spacing:.08em;
               text-transform:uppercase;
               background:#ffffff;
                      color:var(--theme-color);
             }
             .founders-header .founders-heading {
               font-size:42px;
               font-weight:600;
               letter-spacing:.5px;
               margin:18px 0 12px;
               // background:linear-gradient(90deg,#234237 0%, #356a55 50%, #46826b 100%);
               -webkit-background-clip:text;
               color:transparent;
             }
             .founders-header .founders-tagline {
               font-size:15px;
               letter-spacing:.04em;
               color:#3b544a;
               margin:0;
             }
             .founders-body.text-only {
               // background:linear-gradient(135deg,#ffffff 0%, #f7fbf9 45%, #eef7f3 100%);
               padding:24px 26px 30px;
               border-radius:18px;
               position:relative;
             }
                   .founders-body.text-only:before {
                      content:"";
                      position:absolute;
                      top:0; left:50%;
                      transform:translateX(-50%);
                      width:160px; height:4px;
                      /* Use theme color with a subtle transparency gradient */
                      background:linear-gradient(90deg,var(--theme-color),rgba(189,105,56,0.75));
                      border-radius:4px;
                   }
             .founders-text { font-size:16.4px; line-height:1.72; color:#2e3f36; margin:0 0 24px; }
             .founders-text.lead { font-size:17.2px; }
             .founders-text.with-drop-cap:first-letter {
               float:left;
               font-size:52px;
               line-height:44px;
               padding:4px 12px 4px 0;
               font-weight:600;
               color:#234237;
               font-family:'Georgia', serif;
             }
             .founder-block {
               position:relative;
               padding:22px 24px 20px;
               border:1px solid #dbe7e2;
               border-radius:16px;
               // background:linear-gradient(135deg,#ffffff 0%, #f5faf7 65%, #eef7f3 100%);
               margin:0 0 30px;
             }
                   .founder-block:before {
                      content:"";
                      position:absolute;
                      left:18px; top:0;
                      height:4px; width:156px;
                      border-radius:0 0 4px 4px;
                      background:linear-gradient(90deg,var(--theme-color),rgba(189,105,56,0.75));
                   }
            //  .founder-ajmal { background:linear-gradient(135deg,#ffffff 0%, #f6fbf9 55%, #eef7f3 100%); }
                   .founder-ajmal:after {
                      content:"Ajmal Masroor";
                      position:absolute;
                      top:-11px; left:20px;
                      background:var(--theme-color);
                      color:#fff;
                      font-size:11px;
                      letter-spacing:.08em;
                      padding:2px 10px 3px;
                      border-radius:14px;
                      text-transform:uppercase;
                   }
            //  .founder-henrietta { background:linear-gradient(135deg,#ffffff 0%, #f3faf7 55%, #e9f4ef 100%); border-color:#d3e3dd; }
                   .founder-henrietta:after {
                      content:"Henrietta Szovati";
                      position:absolute;
                      top:-11px; left:20px;
                      background:var(--theme-color);
                      color:#fff;
                      font-size:11px;
                      letter-spacing:.08em;
                      padding:2px 10px 3px;
                      border-radius:14px;
                      text-transform:uppercase;
                   }
             .founder-block .founders-text { margin-bottom:0; }
             .vision-highlight {
               position:relative;
               padding:28px 26px 24px;
               margin:8px 0 34px;
               border-radius:18px;
               background:linear-gradient(135deg,#f1f8f5 0%, #e4f2ec 60%, #eef7f3 100%);
               border:1px solid #d7e5df;
             }
             .vision-highlight:before {
               content:"\\"";
               position:absolute;
               top:12px; left:18px;
               font-size:40px;
               line-height:1;
               color:#356a55;
               opacity:.35;
             }
             .vision-highlight .vision { margin:0; font-size:15.8px; }
             .founders-cta-wrap { margin-top:10px; }
             .founders-cta, .founders-cta-alt {
               min-width:220px;
               font-size:15px;
               letter-spacing:.05em;
             }
             .founders-cta-alt { background:var(--theme-color); border:1px solid var(--theme-color); }
             .founders-cta-alt:hover { background:#a55629; border-color:#a55629; }
             .motion-safe { opacity:0; transform:translateY(30px); transition:opacity .9s cubic-bezier(.25,.8,.25,1), transform .9s cubic-bezier(.25,.8,.25,1); }
             .motion-safe-visible { opacity:1; transform:translateY(0); }

             @media (min-width:992px){
               .founders-text { font-size:16px; }
               .founders-body.text-only { padding:30px 38px 36px; }
               .founders-body.text-only .founders-text.lead { font-size:18px; }
               .founders-header .founders-heading { font-size:44px; }
               .founder-block { padding:26px 30px 22px; }
             }
             @media (max-width:991px){
               .founders-header .founders-heading { font-size:38px; }
               .founders-story-band { margin-top:50px; }
             }
             @media (max-width:575px){
               .founders-story-band { padding:60px 0 56px; border-radius:26px; }
               .founders-header .founders-heading { font-size:32px; }
               .founders-text { font-size:15.6px; }
             }
             @media (prefers-reduced-motion:reduce){
               .motion-safe { opacity:1; transform:none; transition:none; }
             }
           `}</style>
         </section>
      </div>
   )
}

export default AboutFour
