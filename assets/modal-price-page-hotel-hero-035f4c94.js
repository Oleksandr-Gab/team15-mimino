(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function d(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=d(t);fetch(t.href,l)}})();$(".single-item").slick({dots:!1,prevArrow:".menu-slick-icons-prevArrow",nextArrow:".menu-slick-icons-nextArrow"});$(".room-hero-slider").slick({arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,variableWidth:!0,autoplay:!0});$(".responsive").slick({dots:!0,infinite:!0,arrows:!1,speed:300,slidesToShow:4,slidesToScroll:4,centerMode:!1,centerPadding:"0",responsive:[{breakpoint:1440,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:375,settings:{slidesToShow:2,slidesToScroll:2}}]});$(".hotel-hero-slider").slick({arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,variableWidth:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".res_slick-container").slick({dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,variableWidth:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o);function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-skroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-table-open]"),closeModalBtn:document.querySelector("[data-modal-table-close]"),modal:document.querySelector("[data-modal-table]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-price-hero-open]"),closeModalBtn:document.querySelector("[data-modal-price-hero-close]"),modal:document.querySelector("[data-modal-hero-price]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-room-open]"),closeModalBtn:document.querySelector("[data-modal-room-close]"),modal:document.querySelector("[data-modal-room]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-table-hero-open]"),closeModalBtn:document.querySelector("[data-modal-table-hero-close]"),modal:document.querySelector("[data-modal-hero-table]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-table-page-rest-menu-open]"),closeModalBtn:document.querySelector("[data-modal-table-page-rest-menu-close]"),modal:document.querySelector("[data-modal-page-rest-menu-table]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-page-hotel-price-hero-open]"),closeModalBtn:document.querySelector("[data-modal-page-hotel-price-hero-close]"),modal:document.querySelector("[data-modal-page-hotel-hero-price]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();
