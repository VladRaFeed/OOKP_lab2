import{$ as i,d as l,c as a}from"./assets/vendor-B99ow-yP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const u=document.querySelector(".form-wrapper");class m{constructor(e,s){this.a=e,this.b=s}solveDiffRealNums(){return l(this.a,this.b)}}class f{constructor(e,s,o,t){this.a=e,this.b=s,this.c=o,this.d=t}solveDiffFractionsNums(){const e=l(this.a,this.b),s=l(this.c,this.d);return l(e,s)}}class p{constructor(e,s,o,t){this.a=e,this.b=s,this.c=o,this.d=t}solveDiffComplexNums(){const e=a(this.a,this.b),s=a(this.c,this.d);return l(e,s)}}class d{constructor(e,s,o,t,n){this.method=e,this.a=s,this.b=o,this.c=t,this.d=n}solve(){switch(this.method){case"realnums":return new m(this.a,this.b).solveDiffRealNums();case"fractionsnums":return new f(this.a,this.b,this.c,this.d).solveDiffFractionsNums();case"complexnums":return new p(this.a,this.b,this.c,this.d).solveDiffComplexNums()}}}const h=()=>{const r=document.querySelector(".taskResult"),e=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,t=new d("realnums",e,s).solve();r.innerHTML="",r.innerHTML=`Result is ${t}`},b=()=>{u.innerHTML=`
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
    `,document.querySelector(".task1Btn").addEventListener("click",h)},v=()=>{const r=document.querySelector(".taskResult"),e=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,o=document.getElementById("thirdnum").value,t=document.getElementById("forthnum").value,c=new d("fractionsnums",e,s,o,t).solve();r.innerHTML="",r.innerHTML=`Result is ${c}`},y=()=>{u.innerHTML=`
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
    `,document.querySelector(".task2Btn").addEventListener("click",v)};i(".dropdown").click(function(){i(this).attr("tabindex",1).focus(),i(this).toggleClass("active"),i(this).find(".dropdown-menu").slideToggle(300)});i(".dropdown").focusout(function(){i(this).removeClass("active"),i(this).find(".dropdown-menu").slideUp(300)});i(".dropdown .dropdown-menu li").click(function(){const r=i(this).text(),e=i(this).attr("id");switch(i(this).parents(".dropdown").find("span").text(r),i(this).parents(".dropdown").find("input").attr("value",e),e){case"Task1":u.innerHTML="",b();break;case"Task2":u.innerHTML="",y();break;case"Task3":u.innerHTML="",console.log("Task3");break;default:console.log("No task selected")}});
//# sourceMappingURL=index.js.map
