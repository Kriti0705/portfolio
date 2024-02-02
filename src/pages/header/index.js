import { Link, NavLink } from 'react-router-dom';
import { Button, Container } from "react-bootstrap";
import "./header.css";
import hero from "../../images/bg.png";
import mask from "../../images/Mask group.png";
import solframe1 from "../../images/solframe1.png";
import solframe2 from "../../images/solframe2.png";
import eclip1 from "../../images/eclip1.jpeg";
import rect1 from "../../images/Rect1.png";
import rect2 from "../../images/Rect2.png";
import rect3 from "../../images/Rect3.png";
import frame1 from "../../images/frame1.png";
import frame2 from "../../images/frame2.png";
import yellow from "../../images/light-yellow-abstract-background-3d-illustration-3d-rendering 2.png";


function Header() {
    return (<>
        <Container>
            <section id="demo">
                <div className="nav">
                    <ul>
                        <li>
                            <NavLink
                                to={"/"}
                                className={({ isActive, isPending }) => {
                                    return isActive ? "active" : "";
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to={"/about"}
                                className={({ isActive, isPending }) => {
                                    return isActive ? "active" : "";
                                }}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to={"/service"}
                                className={({ isActive, isPending }) => {
                                    return isActive ? "active" : "";
                                }}
                            >
                                Service
                            </NavLink>
                            <svg className="vector1" xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
                                <path d="M27.9401 13.5953C26.8475 14.7882 25.506 15.526 23.8829 15.5885C20.818 15.7063 18.4455 13.9061 18.1516 11.6538C17.567 7.17027 20.4862 4.41119 23.6832 4.41119C25.3101 4.41119 26.5211 5.03278 27.5961 6.02935L30.4011 2.87049C28.879 1.36612 26.538 0 23.6832 0C20.9193 0 18.4319 0.914031 16.5458 2.62151V0.407595H2.64579V4.68734H11.4399V11.4952C11.4399 14.5861 10.2628 15.5885 7.97201 15.5885C6.48412 15.5885 4.96167 14.7186 3.67341 13.1089L0.745773 16.2749C2.70883 19.0211 5.64359 20 8.14113 20C12.0066 20 14.3096 18.5884 15.5009 16.4611C17.4399 18.801 20.2821 20 23.3572 20C26.3882 20 28.9081 18.8625 30.7458 16.6852L27.9401 13.5953Z" fill="white" />
                            </svg>
                            <span className='vector2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                    <path d="M0.745773 16.3806L3.12624 13.7838C4.17123 15.1062 5.40644 15.8209 6.6159 15.8221C8.47604 15.8221 9.43346 15.0011 9.43504 12.4619L9.44138 4.08122L2.2992 4.07397L2.30197 0.555664L13.5897 0.564517L13.5805 12.8072C13.5778 16.441 11.81 19.447 6.75063 19.4442C4.72167 19.443 2.33883 18.6382 0.745773 16.3806Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 16 20" fill="none">
                                    <path d="M0.589666 10.0944C0.594421 3.9495 4.4336 0.386116 9.33243 0.39014C11.6507 0.39014 13.5516 1.51449 14.7877 2.75191L12.5067 5.34547C11.6348 4.52535 10.6513 4.01388 9.32966 4.01268C6.73362 4.01268 4.83622 6.24688 4.83384 9.95956C4.83067 13.7696 6.72451 15.9821 9.48342 15.9861C10.8022 15.9861 11.8912 15.331 12.7793 14.3523L15.0555 16.8915C13.5627 18.6799 11.5156 19.6119 9.05385 19.6099C4.5081 19.6042 0.584911 16.3483 0.589666 10.0944Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 15 20" fill="none">
                                    <path d="M14.496 19.2742L10.366 11.8544C12.3189 10.9607 13.6262 9.23432 13.6282 6.51118C13.6318 2.10153 10.4449 0.734123 6.57081 0.730903L0.0694095 0.726074L0.0555382 19.2617L4.20263 19.2649L4.20738 12.5973H6.38138L9.86589 19.2673L14.496 19.2742ZM4.21373 4.05887H6.23119C8.40599 4.05887 9.57225 4.67658 9.57066 6.50636C9.57066 8.32084 8.40203 9.26813 6.22723 9.26652H4.20976L4.21373 4.05887Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 13 20" fill="none">
                                    <path d="M0.51071 0.727295L12.633 0.73655L12.6302 4.25365L4.6475 4.24762L4.64472 7.96512L11.4271 7.97035L11.4243 11.4875L4.64195 11.4822L4.63878 15.7478L12.9024 15.7543L12.8997 19.2726L0.496048 19.2629L0.51071 0.727295Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 18 20" fill="none">
                                    <path d="M12.8658 19.2683L17.2542 19.2719L11.5735 0.731893L6.61247 0.728271L0.902443 19.2595L5.1387 19.2627L6.25819 14.855L11.7618 14.8591L12.8658 19.2683ZM7.088 11.587L7.52391 9.87998C7.98836 8.02887 8.49837 5.85906 8.94776 3.90332H9.0599C9.49898 5.85986 10.0534 8.03169 10.5154 9.8824L10.9434 11.5902L7.088 11.587Z" fill="white" />
                                </svg>
                            </span>
                            <NavLink
                                to={"/resume"}
                                className={({ isActive, isPending }) => {
                                    return isActive ? "active" : "";
                                }}
                            >
                                Resume
                            </NavLink>
                            <NavLink
                                to={"/project"}
                                className={({ isActive, isPending }) => {
                                    return isActive ? "active" : "";
                                }}
                            >
                                Project
                            </NavLink> <NavLink
                                to={"/contact"}
                                className={({ isActive, isPending }) => {
                                    return isActive ? "active" : "";
                                }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="vector3">
                <svg xmlns="http://www.w3.org/2000/svg " width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M2.74512 20C2.74512 17 5.74512 11 2.74512 2M10.2451 23.5C14.5785 19.3333 23.4451 9.2 24.2451 2M13.2451 30.5C15.9118 30.5 23.0451 29.1 30.2451 23.5" stroke="#FEB273" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div>
                    <button class="vector-btn">
                        Hello!
                    </button>
                </div>
                <div class="about-text">
                    <h1>i'm
                        <span style={{ color: "var(--Orange-400, #FD853A)" }}>jenny</span>,
                    </h1>
                    <h1>Product Designer</h1>
                    <svg class="vector4" xmlns="http://www.w3.org/2000/svg" width="74" height="85" viewBox="0 0 74 85" fill="none">
                        <path d="M71.3106 36.2315C69.6282 43.8915 58.6036 57.5291 61.2166 82.1914M54.1233 23.089C40.7223 31.2978 12.4002 52.1993 6.31996 70.1346M50.3888 3.53331C43.5799 2.0379 24.5811 1.61233 3.05674 11.8734" stroke="#FEB273" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div class="experience">
                    <div class="row">
                        <div class="col-md-4">
                            <span class="colon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path d="M12.135 17.445H5.1C5.22 10.44 6.6 9.28496 10.905 6.73496C11.4 6.43496 11.565 5.80496 11.265 5.29496C10.98 4.79996 10.335 4.63496 9.84 4.93496C4.77 7.93496 3 9.76496 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z" fill="#344054" />
                                    <path d="M28.365 17.445H21.33C21.45 10.44 22.83 9.28496 27.135 6.73496C27.63 6.43496 27.795 5.80496 27.495 5.29496C27.195 4.79996 26.565 4.63496 26.055 4.93496C20.985 7.93496 19.215 9.76496 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z" fill="#344054" />
                                </svg>
                                <p>
                                    Jenny's Exceptional product design<br />
                                    ensure our website's success.<br />
                                    Highly Recommended
                                </p>
                            </span>
                        </div>
                        <div class="col-md-4">
                            <div class="profileimg" >
                                <img src={hero} height="100%" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 813 406" fill="none">
                                    <path d="M812.673 406C542.08 406 271.487 406 0.894379 406C0.894379 181.833 182.617 0.110596 406.784 0.110596C630.95 0.110596 812.673 181.833 812.673 406Z" fill="#FEB273" />
                                </svg>
                            </div>
                            <div class="types">
                                <div class="type1">
                                    <button class="button1">Portfolio
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                            <path d="M12.25 29.75L29.75 12.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.25 12.25H29.75V29.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button >
                                </div>
                                <button class="button2">Hire me</button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <span class="stars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0933C21.5459 16.4279 21.3872 16.9119 21.4659 17.3866L22.6512 23.9466C22.7512 24.5026 22.5165 25.0653 22.0512 25.3866C21.5952 25.7199 20.9885 25.7599 20.4912 25.4933L14.5858 22.4132C14.3805 22.3039 14.1525 22.2453 13.9192 22.2386H13.5578C13.4325 22.2573 13.3099 22.2972 13.1979 22.3586L7.29118 25.4533C6.99918 25.5999 6.66852 25.6519 6.34452 25.5999C5.55518 25.4506 5.02852 24.6986 5.15785 23.9053L6.34452 17.3453C6.42318 16.8666 6.26452 16.3799 5.91918 16.0399L1.10452 11.3733C0.70185 10.9826 0.56185 10.3959 0.74585 9.86658C0.924517 9.33858 1.38052 8.95325 1.93118 8.86658L8.55785 7.90525C9.06185 7.85325 9.50452 7.54659 9.73118 7.09325L12.6512 1.10659C12.7205 0.973252 12.8099 0.850585 12.9179 0.746585L13.0378 0.653252C13.1005 0.583919 13.1725 0.526585 13.2525 0.479919L13.3979 0.426585L13.6245 0.333252H14.1859C14.6872 0.385252 15.1285 0.685252 15.3592 1.13325L18.3179 7.09325C18.5312 7.52925 18.9459 7.83192 19.4245 7.90525L26.0512 8.86658C26.6112 8.94658 27.0792 9.33325 27.2645 9.86658C27.4392 10.4013 27.2885 10.9879 26.8779 11.3733L21.8912 16.0933Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0933C21.5459 16.4279 21.3872 16.9119 21.4659 17.3866L22.6512 23.9466C22.7512 24.5026 22.5165 25.0653 22.0512 25.3866C21.5952 25.7199 20.9885 25.7599 20.4912 25.4933L14.5858 22.4132C14.3805 22.3039 14.1525 22.2453 13.9192 22.2386H13.5578C13.4325 22.2573 13.3099 22.2972 13.1979 22.3586L7.29118 25.4533C6.99918 25.5999 6.66852 25.6519 6.34452 25.5999C5.55518 25.4506 5.02852 24.6986 5.15785 23.9053L6.34452 17.3453C6.42318 16.8666 6.26452 16.3799 5.91918 16.0399L1.10452 11.3733C0.70185 10.9826 0.56185 10.3959 0.74585 9.86658C0.924517 9.33858 1.38052 8.95325 1.93118 8.86658L8.55785 7.90525C9.06185 7.85325 9.50452 7.54659 9.73118 7.09325L12.6512 1.10659C12.7205 0.973252 12.8099 0.850585 12.9179 0.746585L13.0378 0.653252C13.1005 0.583919 13.1725 0.526585 13.2525 0.479919L13.3979 0.426585L13.6245 0.333252H14.1859C14.6872 0.385252 15.1285 0.685252 15.3592 1.13325L18.3179 7.09325C18.5312 7.52925 18.9459 7.83192 19.4245 7.90525L26.0512 8.86658C26.6112 8.94658 27.0792 9.33325 27.2645 9.86658C27.4392 10.4013 27.2885 10.9879 26.8779 11.3733L21.8912 16.0933Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0933C21.5459 16.4279 21.3872 16.9119 21.4659 17.3866L22.6512 23.9466C22.7512 24.5026 22.5165 25.0653 22.0512 25.3866C21.5952 25.7199 20.9885 25.7599 20.4912 25.4933L14.5858 22.4132C14.3805 22.3039 14.1525 22.2453 13.9192 22.2386H13.5578C13.4325 22.2573 13.3099 22.2972 13.1979 22.3586L7.29118 25.4533C6.99918 25.5999 6.66852 25.6519 6.34452 25.5999C5.55518 25.4506 5.02852 24.6986 5.15785 23.9053L6.34452 17.3453C6.42318 16.8666 6.26452 16.3799 5.91918 16.0399L1.10452 11.3733C0.70185 10.9826 0.56185 10.3959 0.74585 9.86658C0.924517 9.33858 1.38052 8.95325 1.93118 8.86658L8.55785 7.90525C9.06185 7.85325 9.50452 7.54659 9.73118 7.09325L12.6512 1.10659C12.7205 0.973252 12.8099 0.850585 12.9179 0.746585L13.0378 0.653252C13.1005 0.583919 13.1725 0.526585 13.2525 0.479919L13.3979 0.426585L13.6245 0.333252H14.1859C14.6872 0.385252 15.1285 0.685252 15.3592 1.13325L18.3179 7.09325C18.5312 7.52925 18.9459 7.83192 19.4245 7.90525L26.0512 8.86658C26.6112 8.94658 27.0792 9.33325 27.2645 9.86658C27.4392 10.4013 27.2885 10.9879 26.8779 11.3733L21.8912 16.0933Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0933C21.5459 16.4279 21.3872 16.9119 21.4659 17.3866L22.6512 23.9466C22.7512 24.5026 22.5165 25.0653 22.0512 25.3866C21.5952 25.7199 20.9885 25.7599 20.4912 25.4933L14.5858 22.4132C14.3805 22.3039 14.1525 22.2453 13.9192 22.2386H13.5578C13.4325 22.2573 13.3099 22.2972 13.1979 22.3586L7.29118 25.4533C6.99918 25.5999 6.66852 25.6519 6.34452 25.5999C5.55518 25.4506 5.02852 24.6986 5.15785 23.9053L6.34452 17.3453C6.42318 16.8666 6.26452 16.3799 5.91918 16.0399L1.10452 11.3733C0.70185 10.9826 0.56185 10.3959 0.74585 9.86658C0.924517 9.33858 1.38052 8.95325 1.93118 8.86658L8.55785 7.90525C9.06185 7.85325 9.50452 7.54659 9.73118 7.09325L12.6512 1.10659C12.7205 0.973252 12.8099 0.850585 12.9179 0.746585L13.0378 0.653252C13.1005 0.583919 13.1725 0.526585 13.2525 0.479919L13.3979 0.426585L13.6245 0.333252H14.1859C14.6872 0.385252 15.1285 0.685252 15.3592 1.13325L18.3179 7.09325C18.5312 7.52925 18.9459 7.83192 19.4245 7.90525L26.0512 8.86658C26.6112 8.94658 27.0792 9.33325 27.2645 9.86658C27.4392 10.4013 27.2885 10.9879 26.8779 11.3733L21.8912 16.0933Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0933C21.5459 16.4279 21.3872 16.9119 21.4659 17.3866L22.6512 23.9466C22.7512 24.5026 22.5165 25.0653 22.0512 25.3866C21.5952 25.7199 20.9885 25.7599 20.4912 25.4933L14.5858 22.4132C14.3805 22.3039 14.1525 22.2453 13.9192 22.2386H13.5578C13.4325 22.2573 13.3099 22.2972 13.1979 22.3586L7.29118 25.4533C6.99918 25.5999 6.66852 25.6519 6.34452 25.5999C5.55518 25.4506 5.02852 24.6986 5.15785 23.9053L6.34452 17.3453C6.42318 16.8666 6.26452 16.3799 5.91918 16.0399L1.10452 11.3733C0.70185 10.9826 0.56185 10.3959 0.74585 9.86658C0.924517 9.33858 1.38052 8.95325 1.93118 8.86658L8.55785 7.90525C9.06185 7.85325 9.50452 7.54659 9.73118 7.09325L12.6512 1.10659C12.7205 0.973252 12.8099 0.850585 12.9179 0.746585L13.0378 0.653252C13.1005 0.583919 13.1725 0.526585 13.2525 0.479919L13.3979 0.426585L13.6245 0.333252H14.1859C14.6872 0.385252 15.1285 0.685252 15.3592 1.13325L18.3179 7.09325C18.5312 7.52925 18.9459 7.83192 19.4245 7.90525L26.0512 8.86658C26.6112 8.94658 27.0792 9.33325 27.2645 9.86658C27.4392 10.4013 27.2885 10.9879 26.8779 11.3733L21.8912 16.0933Z" fill="#FD853A" />
                                </svg>
                                <h2>10 Years</h2>
                                <h5>Experince</h5>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            <section id="services">
                <div class="service">
                    <div class="row">
                        <div class="col-md-4">
                            <h1>My <span style={{ color: "#FD853A" }}>Services</span></h1>

                        </div>
                        <div class="col-md-3 my-5">
                            <img src={yellow} height="50%" style={{ position: "absolute", bottom: "-790px" }} />
                        </div>
                        <div class="col-md-5">
                            <div class="text" style={{ color: "#fff" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-md-4">
                            <h2>UI/ UX Design</h2>
                            <img src={frame1} height="307px" style={{ borderRadius: "35px", background: "#9E9D9D" }} />
                        </div>
                        <div class="col-md-4">
                            <h2> Web Design</h2>
                            <img src={frame2} height="307px" style={{ borderRadius: "35px", background: "#9E9D9D" }} />
                        </div>
                        <div class="col-md-4">
                            <h2> Landing Page</h2>

                            <img src={frame1} height="307px" style={{ borderRadius: "35px", background: "#9E9D9D" }} />
                        </div>
                        {/* <h3>UI/ UX Design</h3>
                            <img src={frame1} height="307px" style={{ borderRadius: "35px", background: "#9E9D9D" }} />
                            <img src={frame2} height="307px" style={{ borderRadius: "35px", background: "#9E9D9D" }} />
                            <img src={frame2} height="307px" style={{ borderRadius: "35px", background: "#9E9D9D" }} /> */}
                        <div></div>
                        <div class="rec1">
                        </div>
                        <div class="rec2 ">
                        </div>
                        <div class="rec3 ">
                        </div>
                        <div class="rec4 ">
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience">
                <h1>My <span style={{ color: " var(--Orange-400, #FD853A)" }}>Work Experince</span></h1>
                <div class="row d-flex">
                    <div class="col-md-4" style={{ width: "40%" }}>
                        <h2 class="text mt-5">Cognizant, Mumbai</h2>
                        <span class="fw-light t-0">Sep 2016- July 2020</span>

                        <h2 class="text mt-5">Sugee Pvt limited, Mumbai</h2>
                        <span class="fw-light t-0">Sep 2020- July 2023</span>

                        <h2 class="text mt-5">Cinetstox, Mumbai</h2>
                        <span class="fw-light t-0">Sep 2023</span>
                    </div>
                    <div class="col-md-4" style={{ width: "20%", paddingLeft: "40px" }}>
                        <div class="circle my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                <circle cx="18.5" cy="18" r="18" fill="#FD853A" />
                            </svg>
                        </div>
                        <div class="dash"></div>
                        <div class="circle my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                <circle cx="18.5" cy="18" r="18" fill="#1D2939" />
                            </svg>
                        </div>
                        <div class="circle my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                <circle cx="18.5" cy="18" r="18" fill="#FD853A" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-md-4" style={{ width: "40%" }}>
                        <h2 class="text mt-5">Experince Designer</h2>
                        <p class="fw-light t-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>

                        <h2 class="text mt-4">UI/UX Designer</h2>
                        <p class="fw-light t-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>

                        <h2 class="text mt-4">Lead UX Designer</h2>
                    </div>
                </div>
            </section>
            {/* 
            <section id="hiringprocess" style={{ width: "100%" }}>
                <div class="row d-flex">
                    <div class="col-md-6" style={{ width: "50%" }}>
                        aa
                        <img src={mask} height="100px" />
                    </div>
                    <div class="col-md-6" style={{ width: "50%" }}>
                        bb
                    </div>
                </div>
            </section> */}

            <section id="hiringprocess">
                <div class="row d-flex">
                    <div class="col-md-6" style={{ width: "50%" }}>
                        <img src={mask} width="600px" />
                    </div>
                    <div class="col-md-6" style={{ width: "50%" }}>
                        <h2 >Why
                            <span style={{ color: "var(--Orange-400, #FD853A)", }}> Hire me</span>?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit. Duis lacus nunc, posuere in justo<br />
                            vulputate, bibendum sodales </p>
                        <div class="row">
                            <div class="col-md-6">
                                <h3>450+</h3>
                                <p>Project Completed</p>
                            </div>
                            <div class="col-md-6" style={{ paddingBottom: "10px" }}>
                                <h3>450+</h3>
                                <p class="p" style={{ paddingBottom: "50px" }}>Project Completed</p>
                            </div>
                        </div>
                        <div class="hirebtn" style={{ float: "left" }}>
                            <h4 class="h4">Hire me</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solution">
                <div class="row">
                    <div class="col-md-10">
                        <h1>Lets have a look at </h1>
                        <p>my <span style={{ color: " var(--Orange-400, #FD853A)", }}>Portfolio</span></p>
                    </div>
                    <div class="col" style={{ float: "left", width: "20%", color: "#fff", paddingTop: "20px" }}>
                        <div class="seeall"> see All
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6" >
                        <img src={solframe1} height={"90%"} />
                    </div>

                    <div class="col-md-6">
                        <img src={solframe2} height={"90%"} />
                    </div>
                    <div class="rec1">
                    </div>
                    <div class="rec2 ">
                    </div>
                    <div class="rec3 ">
                    </div>
                    <div class="rec4 ">
                    </div>
                </div>
                <div class="loading">
                    <button class="load" style={{ textShadow: "0px 2px" }}>
                        Loading Page
                    </button>
                    <button class="load">
                        Product Design
                    </button>
                    <button class="load" style={{ textShadow: "0px 2px" }}>
                        Animation
                    </button>
                    <button class="load">
                        Glassmorphism
                    </button>
                    <button class="load">
                        Cards
                    </button>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h1 class="h1" style={{ fontWeight: "700", fontSize: "48px", color: "var(--Gray-700, #344054)" }}>Lirante - Food Dilvery Solution
                        <span style={{ borderRadius: "60px", border: "2px solid #FD853A", background: "#FD853A", alignItems: "stretch" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                                <path d="M9.91666 24.1644L24.0833 9.99773" stroke="#FCFCFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.91666 9.99773L24.0833 9.99773L24.0833 24.1644" stroke="#FCFCFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </h1>
                    <h4 style={{ fontSize: "20px", fontWeight: "400", lineHeight: "normal", letterSpacing: "-0.3px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum<br />
                        ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed <br />
                        lobortis orci elementum egestas lobortis.</h4>
                </div>
            </section>

            <section id="results">
                <svg class="vector6" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M2 20.0811C2 17.0811 5 11.0811 2 2.08105M9.5 23.5811C13.8333 19.4144 22.7 9.28105 23.5 2.08105M12.5 30.5811C15.1667 30.5811 22.3 29.1811 29.5 23.5811" stroke="#FFFDFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1>Testimonials That<br />
                    Speak to<span style={{ color: "#FD853A" }}> My Results</span></h1>
                <svg style={{ marginLeft: "53%" }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M11.9808 2.12271L10.4215 4.20376L7.04297 3.42336C5.22377 2.96814 3.01473 2.64297 2.10512 2.64297C-0.298833 2.64297 0.090997 5.17924 2.81981 7.84558L5.09382 10.0567L2.42998 12.788C0.740714 14.4789 -0.16889 15.9746 0.0260252 16.69C0.220941 17.7956 0.805686 17.9256 5.80851 17.7305L11.2661 17.5354L12.5006 19.6165C17.1136 27.4854 21.2068 27.5504 19.1277 19.6815L18.2181 16.2998L19.9074 15.9096C24.9102 14.8041 25.5599 14.5439 25.5599 13.6335C25.5599 13.1132 23.6757 11.7475 21.4017 10.642C16.5938 8.23577 16.139 7.71551 16.139 4.46389C16.139 -0.413553 14.6447 -1.25898 11.9808 2.12271ZM7.69269 7.19525C7.69269 7.52041 7.56275 7.84558 7.4328 7.84558C7.23789 7.84558 6.91303 7.52041 6.71812 7.19525C6.5232 6.80506 6.65314 6.54493 6.978 6.54493C7.36783 6.54493 7.69269 6.80506 7.69269 7.19525ZM12.7605 9.27629C13.2153 9.73152 13.5401 11.0972 13.5401 12.3328V14.674L11.4611 12.593C9.70682 10.8371 9.57687 10.3818 10.2916 9.53642C11.2661 8.3008 11.7209 8.23577 12.7605 9.27629ZM8.21247 14.2188C8.34241 14.674 7.75766 14.9992 6.71812 14.9992C5.15879 14.9992 5.02885 14.8691 5.74354 14.0237C6.65314 12.9181 7.75766 12.9831 8.21247 14.2188Z" fill="#FCFCFD" />
                </svg>
                <div style={{ color: "#F9FAFB", textAlign: "center" }}>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed congue interdum <br />ligula a dignissim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed <br />lobortis orci elementum egestas lobortis.</div>
                <svg style={{ marginRight: "45%" }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M11.9808 2.12271L10.4215 4.20376L7.04297 3.42336C5.22377 2.96814 3.01473 2.64297 2.10512 2.64297C-0.298833 2.64297 0.090997 5.17924 2.81981 7.84558L5.09382 10.0567L2.42998 12.788C0.740714 14.4789 -0.16889 15.9746 0.0260252 16.69C0.220941 17.7956 0.805686 17.9256 5.80851 17.7305L11.2661 17.5354L12.5006 19.6165C17.1136 27.4854 21.2068 27.5504 19.1277 19.6815L18.2181 16.2998L19.9074 15.9096C24.9102 14.8041 25.5599 14.5439 25.5599 13.6335C25.5599 13.1132 23.6757 11.7475 21.4017 10.642C16.5938 8.23577 16.139 7.71551 16.139 4.46389C16.139 -0.413553 14.6447 -1.25898 11.9808 2.12271ZM7.69269 7.19525C7.69269 7.52041 7.56275 7.84558 7.4328 7.84558C7.23789 7.84558 6.91303 7.52041 6.71812 7.19525C6.5232 6.80506 6.65314 6.54493 6.978 6.54493C7.36783 6.54493 7.69269 6.80506 7.69269 7.19525ZM12.7605 9.27629C13.2153 9.73152 13.5401 11.0972 13.5401 12.3328V14.674L11.4611 12.593C9.70682 10.8371 9.57687 10.3818 10.2916 9.53642C11.2661 8.3008 11.7209 8.23577 12.7605 9.27629ZM8.21247 14.2188C8.34241 14.674 7.75766 14.9992 6.71812 14.9992C5.15879 14.9992 5.02885 14.8691 5.74354 14.0237C6.65314 12.9181 7.75766 12.9831 8.21247 14.2188Z" fill="#FCFCFD" />
                </svg>
                <div class="row my-5" style={{ width: "100%" }}>
                    <div class="col-md-4" style={{ color: "#F9FAFB", float: "left", width: "20%", gap: "14px", borderRadius: "24px", background: "rgba(255, 255, 255, 0.14)", backdropFilter: "blur(7px)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="129" viewBox="0 0 128 129" fill="none">
                            <path d="M84.8533 66.0544H109.867C109.44 90.961 104.533 95.0677 89.2267 104.134C87.4667 105.201 86.88 107.441 87.9467 109.254C89.0133 111.014 91.2533 111.601 93.0667 110.534C111.093 99.8677 117.387 93.361 117.387 62.321V33.5744C117.387 24.4544 109.973 17.0944 100.907 17.0944H84.9067C75.52 17.0944 68.4267 24.1877 68.4267 33.5744V49.5744C68.3733 58.961 75.4667 66.0544 84.8533 66.0544Z" fill="#667085" fill-opacity="0.3" />
                            <path d="M27.1467 66.0544H52.16C51.7333 90.961 46.8267 95.0677 31.52 104.134C29.76 105.201 29.1734 107.441 30.24 109.254C31.3067 111.014 33.5467 111.601 35.36 110.534C53.3867 99.8677 59.68 93.361 59.68 62.321V33.5744C59.68 24.4544 52.2667 17.0944 43.2 17.0944H27.2C17.76 17.0944 10.6667 24.1877 10.6667 33.5744V49.5744C10.6667 58.961 17.76 66.0544 27.1467 66.0544Z" fill="#667085" fill-opacity="0.3" />
                        </svg>
                        <p style={{ color: "white", fontSize: "19px", fontWeight: "400" }}>
                            consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed lobortis orci elementum egestas lobortis.Sed lobortis
                            orci elementum egestas lobortis.Sed lobortis orci elementum
                            egestas lobortis.</p>
                    </div>
                    <div class="col-md-4" style={{ width: "60%", float: "left", borderRadius: "24px", background: "rgba(255, 255, 255, 0.14)", backdropFilter: "blur(7px)" }}>
                        <img src={eclip1} height="50px" style={{ borderRadius: "24px" }} />
                        <h4 class="mx-2">Jayesh Patil.
                            <div style={{ color: "white", fontSize: "19px" }}>CEO, Lirante</div>
                            <div class="my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>5.0
                            </div>
                            <p style={{ color: "white", fontSize: "19px", fontWeight: "400" }}>
                                consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                            </p>
                        </h4>
                    </div>
                    <div class="col-md-4" style={{ width: "20%", float: "right", borderRadius: "24px", gap: "14px", background: "rgba(255, 255, 255, 0.14)", backdropFilter: "blur(7px)" }}>
                        <img src={eclip1} height="40px" style={{ borderRadius: "24px" }} />
                        <h4 class="mx-2">Jayesh Patil.
                            <div style={{ color: " var(--Gray-25, #FCFCFD)", fontSize: "19px", fontWeight: "400" }}>CEO, Lirante</div>
                            <div class="my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                    <path d="M21.8912 16.0095C21.5459 16.3442 21.3872 16.8282 21.4659 17.3028L22.6512 23.8628C22.7512 24.4188 22.5165 24.9815 22.0512 25.3028C21.5952 25.6362 20.9885 25.6762 20.4912 25.4095L14.5858 22.3295C14.3805 22.2202 14.1525 22.1615 13.9192 22.1548H13.5578C13.4325 22.1735 13.3099 22.2135 13.1979 22.2748L7.29118 25.3695C6.99918 25.5162 6.66852 25.5682 6.34452 25.5162C5.55518 25.3668 5.02852 24.6148 5.15785 23.8215L6.34452 17.2615C6.42318 16.7828 6.26452 16.2962 5.91918 15.9562L1.10452 11.2895C0.70185 10.8988 0.56185 10.3122 0.74585 9.78284C0.924517 9.25484 1.38052 8.86951 1.93118 8.78284L8.55785 7.82151C9.06185 7.76951 9.50452 7.46284 9.73118 7.00951L12.6512 1.02284C12.7205 0.889512 12.8099 0.766845 12.9179 0.662845L13.0378 0.569512C13.1005 0.500178 13.1725 0.442845 13.2525 0.396178L13.3979 0.342845L13.6245 0.249512H14.1859C14.6872 0.301512 15.1285 0.601512 15.3592 1.04951L18.3179 7.00951C18.5312 7.44551 18.9459 7.74818 19.4245 7.82151L26.0512 8.78284C26.6112 8.86284 27.0792 9.24951 27.2645 9.78284C27.4392 10.3175 27.2885 10.9042 26.8779 11.2895L21.8912 16.0095Z" fill="#FD853A" />
                                </svg>5.0
                            </div>
                            <p style={{ color: "white", fontSize: "19px", fontWeight: "400" }}>
                                consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                            </p>
                        </h4>
                    </div>
                </div>
            </section>

            <section id='projects'>
                <h1 class="h1">Have an Awsome Project
                    <span style={{ display: "block" }}> Idea?
                        <span style={{ color: " var(--Orange-400, #FD853A)", display: "inline" }}> Let’s Discuss</span></span></h1>
                <div class="main">
                    <span class="border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <path d="M22.6667 4.74768H9.33332C5.33332 4.74768 2.66666 6.74768 2.66666 11.4143V20.7477C2.66666 25.4143 5.33332 27.4143 9.33332 27.4143H22.6667C26.6667 27.4143 29.3333 25.4143 29.3333 20.7477V11.4143C29.3333 6.74768 26.6667 4.74768 22.6667 4.74768ZM23.2933 12.8677L19.12 16.201C18.24 16.9077 17.12 17.2543 16 17.2543C14.88 17.2543 13.7467 16.9077 12.88 16.201L8.70666 12.8677C8.27999 12.521 8.21332 11.881 8.54666 11.4543C8.89332 11.0277 9.51999 10.9477 9.94666 11.2943L14.12 14.6277C15.1333 15.441 16.8533 15.441 17.8667 14.6277L22.04 11.2943C22.4667 10.9477 23.1067 11.0143 23.44 11.4543C23.7867 11.881 23.72 12.521 23.2933 12.8677Z" fill="#FD853A" />
                        </svg>
                    </span>
                    <h5 style={{ marginRight: "50%" }}> Enter Email Address</h5>
                    <Button style={{ borderRadius: "60px", background: "var(--Orange-400, #FD853A)", padding: "20px 40px" }}>send</Button>
                </div>
                <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M15.39 5.29109L16.8 8.11109C16.99 8.50109 17.5 8.87109 17.93 8.95109L20.48 9.37109C22.11 9.64109 22.49 10.8211 21.32 12.0011L19.33 13.9911C19 14.3211 18.81 14.9711 18.92 15.4411L19.49 17.9011C19.94 19.8411 18.9 20.6011 17.19 19.5811L14.8 18.1611C14.37 17.9011 13.65 17.9011 13.22 18.1611L10.83 19.5811C9.12 20.5911 8.08 19.8411 8.53 17.9011L9.1 15.4411C9.19 14.9611 9 14.3111 8.67 13.9811L6.68 11.9911C5.51 10.8211 5.89 9.64109 7.52 9.36109L10.07 8.94109C10.5 8.87109 11.01 8.49109 11.2 8.10109L12.61 5.28109C13.38 3.76109 14.62 3.76109 15.39 5.29109Z" fill="#292D32" />
                        <path d="M8 5.83105H2C1.59 5.83105 1.25 5.49105 1.25 5.08105C1.25 4.67105 1.59 4.33105 2 4.33105H8C8.41 4.33105 8.75 4.67105 8.75 5.08105C8.75 5.49105 8.41 5.83105 8 5.83105Z" fill="#292D32" />
                        <path d="M5 19.8311H2C1.59 19.8311 1.25 19.4911 1.25 19.0811C1.25 18.6711 1.59 18.3311 2 18.3311H5C5.41 18.3311 5.75 18.6711 5.75 19.0811C5.75 19.4911 5.41 19.8311 5 19.8311Z" fill="#292D32" />
                        <path d="M3 12.8311H2C1.59 12.8311 1.25 12.4911 1.25 12.0811C1.25 11.6711 1.59 11.3311 2 11.3311H3C3.41 11.3311 3.75 11.6711 3.75 12.0811C3.75 12.4911 3.41 12.8311 3 12.8311Z" fill="#292D32" />
                    </svg>
                    <span style={{ paddingRight: "90px", color: "#000" }}>4.9/5 Average Ratings</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M17.81 5.57105V6.31105L14.27 4.26105C12.93 3.49105 11.06 3.49105 9.73 4.26105L6.19 6.32105V5.57105C6.19 3.32105 7.42 2.08105 9.67 2.08105H14.33C16.58 2.08105 17.81 3.32105 17.81 5.57105Z" fill="#292D32" />
                        <path d="M17.84 8.05104L17.7 7.98105L16.34 7.20105L13.52 5.57104C12.66 5.07104 11.34 5.07104 10.48 5.57104L7.66 7.19105L6.3 7.99104L6.12 8.08105C4.37 9.26104 4.25 9.48105 4.25 11.371V15.891C4.25 17.781 4.37 18.001 6.16 19.211L10.48 21.701C10.91 21.961 11.45 22.071 12 22.071C12.54 22.071 13.09 21.951 13.52 21.701L17.88 19.181C19.64 18.001 19.75 17.791 19.75 15.891V11.371C19.75 9.48105 19.63 9.26104 17.84 8.05104ZM14.79 13.581L14.18 14.331C14.08 14.441 14.01 14.651 14.02 14.801L14.08 15.761C14.12 16.351 13.7 16.651 13.15 16.441L12.26 16.081C12.12 16.031 11.89 16.031 11.75 16.081L10.86 16.431C10.31 16.651 9.89 16.341 9.93 15.751L9.99 14.791C10 14.641 9.93 14.431 9.83 14.321L9.21 13.581C8.83 13.131 9 12.631 9.57 12.481L10.5 12.241C10.65 12.201 10.82 12.061 10.9 11.941L11.42 11.141C11.74 10.641 12.25 10.641 12.58 11.141L13.1 11.941C13.18 12.071 13.36 12.201 13.5 12.241L14.43 12.481C15 12.631 15.17 13.131 14.79 13.581Z" fill="#292D32" />
                    </svg>
                    <span style={{ paddingRight: "100px", color: "#000" }}> 25+ Winning Awards</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18.54 4.20102L13.04 2.14102C12.47 1.93102 11.54 1.93102 10.97 2.14102L5.47 4.20102C4.41 4.60102 3.55 5.84102 3.55 6.97102V15.071C3.55 15.881 4.08 16.951 4.73 17.431L10.23 21.541C11.2 22.271 12.79 22.271 13.76 21.541L19.26 17.431C19.91 16.941 20.44 15.881 20.44 15.071V6.97102C20.45 5.84102 19.59 4.60102 18.54 4.20102ZM15.48 9.80102L11.18 14.101C11.03 14.251 10.84 14.321 10.65 14.321C10.46 14.321 10.27 14.251 10.12 14.101L8.52 12.481C8.23 12.191 8.23 11.711 8.52 11.421C8.81 11.131 9.29 11.131 9.58 11.421L10.66 12.501L14.43 8.73102C14.72 8.44102 15.2 8.44102 15.49 8.73102C15.78 9.02102 15.78 9.51102 15.48 9.80102Z" fill="#292D32" />
                    </svg>
                    <span style={{ color: "#000" }}> Certified Product Designer</span>
                </div>
                <div class="designs my-5">
                    <div class="designtypes">
                        <h1 style={{ fontSize: "49.90px" }}>UX Design</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.3831 0.391039L21.6153 12.4742L34.1085 16.6333L22.0253 21.8655L17.8662 34.3587L12.634 22.2755L0.140822 18.1164L12.224 12.8842L16.3831 0.391039Z" fill="#FD853A" />
                        </svg>
                        <h1 style={{ fontSize: "49.90px" }}>App Design</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.3831 0.391039L21.6153 12.4742L34.1085 16.6333L22.0253 21.8655L17.8662 34.3587L12.634 22.2755L0.140822 18.1164L12.224 12.8842L16.3831 0.391039Z" fill="#FD853A" />
                        </svg>
                        <h1 style={{ fontSize: "49.90px" }}>Dashboard</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.3831 0.391039L21.6153 12.4742L34.1085 16.6333L22.0253 21.8655L17.8662 34.3587L12.634 22.2755L0.140822 18.1164L12.224 12.8842L16.3831 0.391039Z" fill="#FD853A" />
                        </svg>
                        <h1 style={{ fontSize: "49.90px" }}>Wireframe</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.3831 0.391039L21.6153 12.4742L34.1085 16.6333L22.0253 21.8655L17.8662 34.3587L12.634 22.2755L0.140822 18.1164L12.224 12.8842L16.3831 0.391039Z" fill="#FD853A" />
                        </svg>
                        <h1 style={{ fontSize: "49.90px" }}>User Researc</h1>

                    </div>
                </div>
                <div class="row my-5 w-100">
                    <div class="col-md-4" style={{ width: "40%", float: 'left' }}>
                        <h1
                            style={{ width: "61%", float: "left" }}
                        >From my blog post</h1>
                    </div>
                    <div class="col-md-4" style={{ width: "40%", float: 'left' }}>
                    </div>
                    <div class="col-md-4" style={{ width: "20%", float: 'left' }} >
                        <Button style={{ borderRadius: "60px", background: "var(--Orange-400, #FD853A)", padding: "20px 40px", marginTop: "50px" }}>See All</Button>
                    </div>
                </div>
                <div class="row my-5" style={{ width: "100%" }}>
                    <div class="col-md-4">
                        <img src={rect1} height="400px" />
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="90" height="90" style={{ background: " var(--Gray-800, #1D2939)", marginTop: "71%", right: "10px", marginLeft: "-106px", borderRadius: "79px" }} viewBox="0 0 73 73" fill="none">
                            <path d="M21.5 51.0811L51.5 21.0811" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.5 21.0811H51.5V51.0811" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="posts my-2"
                            style={{ background: "var(--Gray-100, #F2F4F7)", borderRadius: "24px", padding: "10px 30px", gap: "10px", width: "58%" }}>
                            <h3 style={{ fontFamily: "Inter", fontWeight: "400" }}>UI/ UX
                                <span
                                    style={{ textShadow: "1px 1px 1px black", fontFamily: "Inter", background: "var(--Gray-100, #F2F4F7)", borderRadius: "24px" }}>
                                    Design</span></h3>
                        </div>
                        <div class="row d-flex">
                            <div class="col-md-6" style={{ float: "left", width: "43%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5.08105" r="4.5" fill="#FD853A" />
                                </svg>  <span class="mx-2" style={{ fontFamily: "Inter", fontSize: "23px", fontWeight: "400", color: 'var(--Gray-700, #344054);' }}>
                                    Jayesh Patil</span>
                            </div>
                            <div class="col-md-1">
                            </div>
                            <div class="col-md-5" style={{ float: "right", width: "48%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5.08105" r="4.5" fill="#FD853A" />
                                </svg>  <span class="mx-2" style={{ fontFamily: "Inter", fontSize: "23px", fontWeight: "400", color: 'var(--Gray-700, #344054);' }}>
                                    10 Nov, 2023 </span>
                            </div>
                            <h4 style={{ fontSize: "32px", fontWeight: "400", color: "var(--Gray-700, #344054)" }}>Design Unraveled: Behind
                                the Scenes of UI/UX Magic</h4>


                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src={rect2} height="400px" />
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="90" height="90" style={{ background: " var(--Gray-800, #1D2939)", marginTop: "71%", right: "10px", marginLeft: "-106px", borderRadius: "79px" }} viewBox="0 0 73 73" fill="none">
                            <path d="M21.5 51.0811L51.5 21.0811" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.5 21.0811H51.5V51.0811" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="posts my-2"
                            style={{ background: "var(--Gray-100, #F2F4F7)", borderRadius: "24px", padding: "10px 30px", gap: "10px", width: "58%" }}>
                            <h3 style={{ fontFamily: "Inter", fontWeight: "400" }}> App  <span style={{ fontFamily: "Inter", background: "var(--Gray-100, #F2F4F7)", borderRadius: "24px" }}>
                                Design</span></h3>
                        </div>
                        <div class="row d-flex">
                            <div class="col-md-6" style={{ float: "left", width: "43%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5.08105" r="4.5" fill="#FD853A" />
                                </svg>  <span class="mx-2" style={{ fontFamily: "Inter", fontSize: "23px", fontWeight: "400", color: 'var(--Gray-700, #344054);' }}>
                                    Jayesh Patil</span>
                            </div>
                            <div class="col-md-1">
                            </div>
                            <div class="col-md-5" style={{ float: "right", width: "48%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5.08105" r="4.5" fill="#FD853A" />
                                </svg>  <span class="mx-2" style={{ fontFamily: "Inter", fontSize: "23px", fontWeight: "400", color: 'var(--Gray-700, #344054);' }}>
                                    9 Oct, 2023 </span>
                            </div>
                            <h4
                                style={{ fontSize: "32px", fontWeight: "400", color: "var(--Gray-700, #344054)" }}>
                                Sugee: Loan Management System for Rural Sector
                            </h4>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src={rect3} height="400px" />
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="90" height="90" style={{ background: " var(--Gray-800, #1D2939)", marginTop: "71%", right: "10px", marginLeft: "-106px", borderRadius: "79px" }} viewBox="0 0 73 73" fill="none">
                            <path d="M21.5 51.0811L51.5 21.0811" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.5 21.0811H51.5V51.0811" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="posts my-2"
                            style={{ background: "var(--Gray-100, #F2F4F7)", borderRadius: "24px", padding: "10px 30px", gap: "10px", width: "58%" }}>
                            <h3 style={{ fontFamily: "Inter", fontWeight: "400" }}>App  <span style={{ textShadow: "1px 1px 1px black", fontFamily: "Inter", background: "var(--Gray-100, #F2F4F7)", borderRadius: "24px" }}>
                                Design</span></h3>
                        </div>
                        <div class="row d-flex">
                            <div class="col-md-6" style={{ float: "left", width: "43%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5.08105" r="4.5" fill="#FD853A" />
                                </svg>  <span class="mx-2" style={{ fontFamily: "Inter", fontSize: "23px", fontWeight: "400", color: 'var(--Gray-700, #344054);' }}>
                                    Jayesh Patil</span>
                            </div>
                            <div class="col-md-1">
                            </div>
                            <div class="col-md-5" style={{ float: "right", width: "48%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5.08105" r="4.5" fill="#FD853A" />
                                </svg>  <span class="mx-2" style={{ fontFamily: "Inter", fontSize: "23px", fontWeight: "400", color: 'var(--Gray-700, #344054);' }}>
                                    13 Aug, 2023 </span>
                            </div>
                            <h4
                                style={{ fontSize: "32px", fontWeight: "400", color: "var(--Gray-700, #344054)" }}>
                                Cinetrade: Innovative way to invest in Digital Media
                            </h4>


                        </div>
                    </div>
                </div>
            </section>

            <section id="connection">
                <div class="row d-flex my-5" style={{ width: "100%" }}>
                    <div class="col-md-6">
                        <h1 style={{ textShadow: "4px 9px 11px white" }}>Lets Connect there</h1>
                    </div>
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-3 mb-5">
                        <div class="seeall" style={{ color: "#fff", fontSize: "25px", fontWeight: "500", textShadow: "1px 6px 4px white" }}>Hire me
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <path d="M12.75 29.8311L30.25 12.3311" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.75 12.3311H30.25V29.8311" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>

                    <div class="line my-5">
                        <div class="row">
                            <div class="col-md-6 my-5">
                                <div class="col-md-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21" fill="none">
                                        <path d="M27.1944 13.6764C26.1017 14.8693 24.7602 15.607 23.1371 15.6695C20.0722 15.7874 17.6997 13.9872 17.4059 11.7349C16.8212 7.25133 19.7404 4.49225 22.9375 4.49225C24.5643 4.49225 25.7753 5.11383 26.8504 6.1104L29.6553 2.95154C28.1332 1.44718 25.7922 0.0810547 22.9375 0.0810547C20.1735 0.0810547 17.6862 0.995086 15.8 2.70257V0.48865H1.90002V4.7684H10.6941V11.5762C10.6941 14.6672 9.51703 15.6695 7.22623 15.6695C5.73835 15.6695 4.2159 14.7996 2.92764 13.19L0 16.356C1.96306 19.1021 4.89781 20.0811 7.39536 20.0811C11.2608 20.0811 13.5638 18.6694 14.7551 16.5421C16.6941 18.882 19.5364 20.0811 22.6114 20.0811C25.6424 20.0811 28.1623 18.9435 30 16.7663L27.1944 13.6764Z" fill="white" />
                                    </svg>
                                    <span style={{ marginRight: "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                                            <path d="M0 16.4617L2.38046 13.8649C3.42546 15.1872 4.66067 15.9019 5.87012 15.9031C7.73027 15.9031 8.68769 15.0822 8.68927 12.543L8.69561 4.16227L1.55342 4.15503L1.5562 0.636719L12.8439 0.645572L12.8348 12.8882C12.832 16.522 11.0642 19.5281 6.00486 19.5252C3.97589 19.524 1.59305 18.7192 0 16.4617Z" fill="white" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                            <path d="M0.843876 10.1754C0.848632 4.03055 4.68781 0.467171 9.58664 0.471195C11.9049 0.471195 13.8059 1.59554 15.0419 2.83297L12.7609 5.42653C11.889 4.60641 10.9055 4.09494 9.58387 4.09373C6.98783 4.09373 5.09043 6.32794 5.08805 10.0406C5.08488 13.8507 6.97872 16.0631 9.73763 16.0672C11.0565 16.0672 12.1454 15.412 13.0335 14.4334L15.3097 16.9726C13.817 18.7609 11.7698 19.6929 9.30806 19.6909C4.76231 19.6853 0.839121 16.4293 0.843876 10.1754Z" fill="white" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.7503 19.3552L10.6202 11.9355C12.5731 11.0417 13.8804 9.31538 13.8824 6.59224C13.886 2.18258 10.6991 0.815177 6.82502 0.811958L0.323625 0.807129L0.309753 19.3427L4.45684 19.346L4.4616 12.6784H6.6356L10.1201 19.3484L14.7503 19.3552ZM4.46794 4.13993H6.48541C8.6602 4.13993 9.82646 4.75763 9.82488 6.58741C9.82488 8.4019 8.65624 9.34918 6.48145 9.34757H4.46398L4.46794 4.13993Z" fill="white" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                            <path d="M0.764906 0.80835L12.8872 0.817605L12.8844 4.33471L4.90169 4.32867L4.89892 8.04618L11.6813 8.05141L11.6785 11.5685L4.89614 11.5633L4.89298 15.8289L13.1566 15.8353L13.1539 19.3536L0.750244 19.344L0.764906 0.80835Z" fill="white" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                            <path d="M12.12 19.3494L16.5085 19.353L10.8278 0.812948L5.8667 0.809326L0.156677 19.3405L4.39293 19.3437L5.51243 14.9361L11.016 14.9401L12.12 19.3494ZM6.34224 11.6681L6.77815 9.96104C7.24259 8.10993 7.75261 5.94011 8.20199 3.98438H8.31414C8.75322 5.94092 9.30762 8.11275 9.76968 9.96345L10.1977 11.6713L6.34224 11.6681Z" fill="white" />
                                        </svg>
                                    </span>

                                </div>
                                <div class="my-5">
                                    <p style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Sed lobortis orci elementum egestas lobortis.</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M22 16.2711C22 19.9111 19.83 22.0811 16.19 22.0811H15C14.45 22.0811 14 21.6311 14 21.0811V15.3111C14 15.0411 14.22 14.8111 14.49 14.8111L16.25 14.7811C16.39 14.7711 16.51 14.6711 16.54 14.5311L16.89 12.6211C16.92 12.4411 16.78 12.2711 16.59 12.2711L14.46 12.3011C14.18 12.3011 13.96 12.0811 13.95 11.8111L13.91 9.36105C13.91 9.20105 14.04 9.06107 14.21 9.06107L16.61 9.02106C16.78 9.02106 16.91 8.89107 16.91 8.72107L16.87 6.32104C16.87 6.15104 16.74 6.02106 16.57 6.02106L13.87 6.06107C12.21 6.09107 10.89 7.45105 10.92 9.11105L10.97 11.8611C10.98 12.1411 10.76 12.3611 10.48 12.3711L9.28 12.3911C9.11 12.3911 8.98001 12.521 8.98001 12.691L9.01001 14.5911C9.01001 14.7611 9.14 14.8911 9.31 14.8911L10.51 14.8711C10.79 14.8711 11.01 15.0911 11.02 15.3611L11.11 21.0611C11.12 21.6211 10.67 22.0811 10.11 22.0811H7.81C4.17 22.0811 2 19.911 2 16.261V7.89105C2 4.25105 4.17 2.08105 7.81 2.08105H16.19C19.83 2.08105 22 4.25105 22 7.89105V16.2711Z" fill="white" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M17 4.08105H7C4 4.08105 2 6.08105 2 9.08105V15.0811C2 18.0811 4 20.0811 7 20.0811H17C20 20.0811 22 18.0811 22 15.0811V9.08105C22 6.08105 20 4.08105 17 4.08105ZM13.89 13.1111L11.42 14.5911C10.42 15.1911 9.59998 14.7311 9.59998 13.5611V10.5911C9.59998 9.42106 10.42 8.96107 11.42 9.56107L13.89 11.041C14.84 11.621 14.84 12.5411 13.89 13.1111Z" fill="white" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M21.98 11.491C21.64 5.69101 16.37 1.22102 10.3 2.22102C6.11998 2.91102 2.76999 6.301 2.11999 10.481C1.73999 12.901 2.24001 15.191 3.33001 17.081L2.43999 20.391C2.23999 21.141 2.92998 21.821 3.66998 21.611L6.92999 20.711C8.40999 21.581 10.14 22.081 11.99 22.081C17.63 22.081 22.31 17.111 21.98 11.491ZM16.88 15.801C16.79 15.981 16.68 16.151 16.54 16.311C16.29 16.581 16.02 16.781 15.72 16.901C15.42 17.031 15.09 17.091 14.74 17.091C14.23 17.091 13.68 16.971 13.11 16.721C12.53 16.471 11.96 16.141 11.39 15.731C10.81 15.311 10.27 14.841 9.74999 14.331C9.22999 13.811 8.76997 13.261 8.34997 12.691C7.93997 12.121 7.60999 11.551 7.36999 10.981C7.12999 10.411 7.01 9.86101 7.01 9.34101C7.01 9.00101 7.06999 8.67101 7.18999 8.37101C7.30999 8.06101 7.50001 7.78101 7.77001 7.53101C8.09001 7.21101 8.43999 7.06101 8.80999 7.06101C8.94999 7.06101 9.08996 7.09101 9.21996 7.15101C9.34996 7.21101 9.46999 7.30101 9.55999 7.43101L10.72 9.07099C10.81 9.20099 10.88 9.311 10.92 9.421C10.97 9.531 10.99 9.631 10.99 9.731C10.99 9.851 10.95 9.97101 10.88 10.091C10.81 10.211 10.72 10.331 10.6 10.451L10.22 10.851C10.16 10.911 10.14 10.971 10.14 11.051C10.14 11.091 10.15 11.131 10.16 11.171C10.18 11.211 10.19 11.241 10.2 11.271C10.29 11.441 10.45 11.651 10.67 11.911C10.9 12.171 11.14 12.441 11.4 12.701C11.67 12.971 11.93 13.211 12.2 13.441C12.46 13.661 12.68 13.811 12.85 13.901C12.88 13.911 12.91 13.931 12.94 13.941C12.98 13.961 13.02 13.961 13.07 13.961C13.16 13.961 13.22 13.931 13.28 13.871L13.66 13.491C13.79 13.361 13.91 13.271 14.02 13.211C14.14 13.141 14.25 13.101 14.38 13.101C14.48 13.101 14.58 13.121 14.69 13.171C14.8 13.221 14.92 13.281 15.04 13.371L16.7 14.551C16.83 14.641 16.92 14.751 16.98 14.871C17.03 15.001 17.06 15.121 17.06 15.261C17 15.431 16.96 15.621 16.88 15.801Z" fill="white" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M16.19 2.08105H7.81C4.17 2.08105 2 4.25105 2 7.89105V16.2611C2 19.9111 4.17 22.0811 7.81 22.0811H16.18C19.82 22.0811 21.99 19.9111 21.99 16.2711V7.89105C22 4.25105 19.83 2.08105 16.19 2.08105ZM12 15.9611C9.86 15.9611 8.12 14.2211 8.12 12.0811C8.12 9.94105 9.86 8.20105 12 8.20105C14.14 8.20105 15.88 9.94105 15.88 12.0811C15.88 14.2211 14.14 15.9611 12 15.9611ZM17.92 6.96105C17.87 7.08105 17.8 7.19105 17.71 7.29105C17.61 7.38105 17.5 7.45105 17.38 7.50105C17.26 7.55105 17.13 7.58105 17 7.58105C16.73 7.58105 16.48 7.48105 16.29 7.29105C16.2 7.19105 16.13 7.08105 16.08 6.96105C16.03 6.84105 16 6.71105 16 6.58105C16 6.45105 16.03 6.32105 16.08 6.20105C16.13 6.07105 16.2 5.97105 16.29 5.87105C16.52 5.64105 16.87 5.53105 17.19 5.60105C17.26 5.61105 17.32 5.63105 17.38 5.66105C17.44 5.68105 17.5 5.71105 17.56 5.75105C17.61 5.78105 17.66 5.83105 17.71 5.87105C17.8 5.97105 17.87 6.07105 17.92 6.20105C17.97 6.32105 18 6.45105 18 6.58105C18 6.71105 17.97 6.84105 17.92 6.96105Z" fill="white" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M20.1066 8.71529C20.0826 8.49182 20.0546 8.31274 20.0316 8.18511L21.9161 5.3584C22.0345 5.18068 22.027 4.94731 21.8974 4.77756C21.7677 4.60781 21.5446 4.53917 21.3419 4.60671L18.7212 5.48027C18.5827 5.27371 18.3773 5.00125 18.1036 4.7275C17.5491 4.173 16.6794 3.58105 15.5 3.58105C14.2775 3.58105 13.3727 3.92323 12.7266 4.485C12.0872 5.041 11.75 5.76974 11.5775 6.45979C11.4052 7.14894 11.3898 7.82716 11.4147 8.32477C11.422 8.46989 11.4327 8.60123 11.4444 8.71489C10.1893 8.9818 8.87591 8.57293 7.58934 7.8094C6.17064 6.96746 4.87015 5.74406 3.85358 4.7275C3.71259 4.58651 3.50131 4.54277 3.31593 4.61618C3.13054 4.6896 3.0065 4.86614 3.00027 5.06544C2.87287 9.14225 3.71338 14.0768 7.51119 16.5791C5.9138 17.4432 4.34766 17.8462 2.43801 18.0849C2.21938 18.1122 2.04441 18.2795 2.00721 18.4966C1.97001 18.7138 2.07935 18.9297 2.27642 19.0283C7.43512 21.6076 14.1199 21.4212 17.9 16.3811C19.467 14.2917 19.9921 12.197 20.1233 10.6226C20.1888 9.83625 20.1563 9.17914 20.1066 8.71529Z" fill="white" />
                                    </svg>

                                </div>
                            </div>
                            <div class="col-md-6 d-flex">
                                <div class="col-md-3 mt-5">
                                    <span class="my-5" style={{ color: "var(--Orange-400, #FD853A)" }}>Navigation
                                        <div class="d-flex" style={{ flexDirection: "column" }}>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>Home</span>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>About Us</span>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>Service</span>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>Resume</span>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>Project</span>
                                        </div>
                                    </span>
                                </div>
                                <div class="col-md-3 mt-5">
                                    <span class="" style={{ color: "var(--Orange-400, #FD853A)", marginLeft: "10px" }}>Contact
                                        <div class="d-flex" style={{ flexDirection: "column" }}>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>+91 7738443636</span>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>Jaycrea36@gmail.com</span>
                                            <span style={{ color: "var(--Gray-25, #FCFCFD)", marginTop: "15px" }}>Portfolio-jcrea.com</span>
                                        </div>
                                    </span>
                                </div>
                                <div class="col-md-6 mt-2">
                                    <h5 style={{ color: " var(--Orange-400, #FD853A)" }}>Get the latest information</h5>
                                    <div class="textbox">
                                        <div class="Email">Email Address</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M6.29596 3.48708C3.91006 2.38589 1.36177 4.66673 2.19273 7.15964L3.45418 10.9007C3.5913 11.3074 3.9726 11.5812 4.40176 11.5812H12.9999C13.5522 11.5812 13.9999 12.0289 13.9999 12.5812C13.9999 13.1335 13.5522 13.5812 12.9999 13.5812H4.40176C3.9726 13.5812 3.5913 13.855 3.45418 14.2617L2.19274 18.0028C1.36177 20.4957 3.91006 22.7765 6.29597 21.6754L20.0982 15.3051C22.422 14.2326 22.422 10.9299 20.0982 9.85737L6.29596 3.48708Z" fill="#FCFCFD" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="line">
                    <div class="my-5" style={{ color: "var(--Gray-25, #FCFCFD)" }}>Copyright© 2023 Jayesh. All Rights Reserved.
                        <span class="my-2" style={{ color: "var(--Gray-25, #FCFCFD)", marginLeft: "47%" }}> User Terms & Conditions | Privacy Policy
                        </span>
                    </div>
                </div>

            </section>

        </Container >

    </>

    )
}

export default Header;

