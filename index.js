import{$ as l,d as c,c as m}from"./assets/vendor-B99ow-yP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const u=document.querySelector(".form-wrapper");class d{constructor(e,s){this.a=e,this.b=s}solveDiffRealNums(){return c(this.a,this.b)}}class p{constructor(e,s,r,t){this.a=e,this.b=s,this.c=r,this.d=t}solveDiffFractionsNums(){const e=c(this.a,this.b),s=c(this.c,this.d);return c(e,s)}}class f{constructor(e,s,r,t){this.a=e,this.b=s,this.c=r,this.d=t}solveDiffComplexNums(){const e=m(this.a,this.b),s=m(this.c,this.d);return c(e,s)}}class a{constructor(e,s,r,t,o){this.method=e,this.a=s,this.b=r,this.c=t,this.d=o}solve(){switch(this.method){case"realnums":return new d(this.a,this.b).solveDiffRealNums();case"fractionsnums":return new p(this.a,this.b,this.c,this.d).solveDiffFractionsNums();case"complexnums":return new f(this.a,this.b,this.c,this.d).solveDiffComplexNums()}}}const b=()=>{const n=document.querySelector(".taskResult"),e=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,t=new a("realnums",e,s).solve();n.innerHTML="",n.innerHTML=`Result is ${t}`},v=()=>{u.innerHTML=`
    <p class="taskLabel">Розрахунок частки дійсних чисел</p>
        <form class="taskForm">
            <div class="input-wrapper">
                <label for="firstnum" class="form-label">Enter first number:</label>
                <input type="number" class="form-input" id="firstnum" required>
            </div>
            <div class="input-wrapper">
                <label for="secondnum" class="form-label">Enter second number:</label>
                <input type="number" class="form-input" id="secondnum" required>
            </div>
            <button type="button" class="taskBtn task1Btn">Calculate</button>
            <p class="taskResult"></p>
        </form>
    `,document.querySelector(".task1Btn").addEventListener("click",b)},h=()=>{const n=document.querySelector(".taskResult"),e=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,r=document.getElementById("thirdnum").value,t=document.getElementById("forthnum").value,i=new a("fractionsnums",e,s,r,t).solve();n.innerHTML="",n.innerHTML=`Result is ${i}`},y=()=>{u.innerHTML=`
    <p class="taskLabel">Розрахунок частки дробових чисел</p>
        <form class="taskForm">
            <div class="fractions-wrapper">
                <div class="fraction-input">
                    <div class="input-wrapper">
                        <label for="firstnum" class="form-label">Enter first number:</label>
                        <input type="number" class="form-input" id="firstnum" required>
                    </div>
                    <div class="input-wrapper">
                        <label for="secondnum" class="form-label">Enter second number:</label>
                        <input type="number" class="form-input" id="secondnum" required>
                    </div>
                </div>
                <div class="fraction-input">
                    <div class="input-wrapper">
                        <label for="thirdnum" class="form-label">Enter thirdnum number:</label>
                        <input type="number" class="form-input" id="thirdnum" required>
                    </div>
                    <div class="input-wrapper">
                        <label for="forthnum" class="form-label">Enter forthnum number:</label>
                        <input type="number" class="form-input" id="forthnum" required>
                    </div>
                </div>
            </div>
            <button type="button" class="taskBtn task2Btn">Calculate</button>
            <p class="taskResult"></p>
        </form>
    `,document.querySelector(".task2Btn").addEventListener("click",h)},k=()=>{const n=document.querySelector(".taskResult"),e=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,r=document.getElementById("thirdnum").value,t=document.getElementById("forthnum").value,i=new a("complexnums",e,s,r,t).solve();n.innerHTML="",n.innerHTML=`Result is ${i}`},N=()=>{u.innerHTML=`
    <p class="taskLabel">Розрахунок частки комплексних чисел</p>
        <form class="taskForm">
            <div class="fractions-wrapper">
                <div class="fraction-input">
                    <div class="input-wrapper">
                        <label for="firstnum" class="form-label">Enter first number:</label>
                        <input type="number" class="form-input" id="firstnum" required>
                    </div>
                    <div class="input-wrapper">
                        <label for="secondnum" class="form-label">Enter second number:</label>
                        <input type="number" class="form-input" id="secondnum" required>
                    </div>
                </div>
                <div class="fraction-input">
                    <div class="input-wrapper">
                        <label for="thirdnum" class="form-label">Enter thirdnum number:</label>
                        <input type="number" class="form-input" id="thirdnum" required>
                    </div>
                    <div class="input-wrapper">
                        <label for="forthnum" class="form-label">Enter forthnum number:</label>
                        <input type="number" class="form-input" id="forthnum" required>
                    </div>
                </div>
            </div>
            <button type="button" class="taskBtn task3Btn">Calculate</button>
            <p class="taskResult"></p>
        </form>
    `,document.querySelector(".task3Btn").addEventListener("click",k)};l(".dropdown").click(function(){l(this).attr("tabindex",1).focus(),l(this).toggleClass("active"),l(this).find(".dropdown-menu").slideToggle(300)});l(".dropdown").focusout(function(){l(this).removeClass("active"),l(this).find(".dropdown-menu").slideUp(300)});l(".dropdown .dropdown-menu li").click(function(){const n=l(this).text(),e=l(this).attr("id");switch(l(this).parents(".dropdown").find("span").text(n),l(this).parents(".dropdown").find("input").attr("value",e),e){case"Task1":u.innerHTML="",v();break;case"Task2":u.innerHTML="",y();break;case"Task3":u.innerHTML="",N();break;default:console.log("No task selected")}});
//# sourceMappingURL=index.js.map
