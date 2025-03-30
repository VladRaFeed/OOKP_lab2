import"./assets/styles-BwZPiAiB.js";import{$ as o,c as m,d as u}from"./assets/vendor-sGuRfugF.js";const l=document.querySelector(".form-wrapper");class d{constructor(t,s){this.a=t,this.b=s}solveDiffRealNums(){return u(this.a,this.b)}}class p{constructor(t,s,n,r){this.a=t,this.b=s,this.c=n,this.d=r}solveDiffFractionsNums(){const t=u(this.a,this.b),s=u(this.c,this.d);return u(t,s)}}class f{constructor(t,s,n,r){this.a=t,this.b=s,this.c=n,this.d=r}solveDiffComplexNums(){const t=m(this.a,this.b),s=m(this.c,this.d);return u(t,s)}}class a{constructor(t,s,n,r,i){this.method=t,this.a=s,this.b=n,this.c=r,this.d=i}solve(){switch(this.method){case"realnums":return new d(this.a,this.b).solveDiffRealNums();case"fractionsnums":return new p(this.a,this.b,this.c,this.d).solveDiffFractionsNums();case"complexnums":return new f(this.a,this.b,this.c,this.d).solveDiffComplexNums()}}}const b=()=>{const e=document.querySelector(".taskResult"),t=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,r=new a("realnums",t,s).solve();e.innerHTML="",e.innerHTML=`Result is ${r}`},v=()=>{l.innerHTML=`
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
    `,document.querySelector(".task1Btn").addEventListener("click",b)},h=()=>{const e=document.querySelector(".taskResult"),t=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,n=document.getElementById("thirdnum").value,r=document.getElementById("forthnum").value,c=new a("fractionsnums",t,s,n,r).solve();e.innerHTML="",e.innerHTML=`Result is ${c}`},k=()=>{l.innerHTML=`
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
    `,document.querySelector(".task2Btn").addEventListener("click",h)},y=()=>{const e=document.querySelector(".taskResult"),t=document.getElementById("firstnum").value,s=document.getElementById("secondnum").value,n=document.getElementById("thirdnum").value,r=document.getElementById("forthnum").value,c=new a("complexnums",t,s,n,r).solve();e.innerHTML="",e.innerHTML=`Result is ${c}`},w=()=>{l.innerHTML=`
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
    `,document.querySelector(".task3Btn").addEventListener("click",y)};o(".dropdown").click(function(){o(this).attr("tabindex",1).focus(),o(this).toggleClass("active"),o(this).find(".dropdown-menu").slideToggle(300)});o(".dropdown").focusout(function(){o(this).removeClass("active"),o(this).find(".dropdown-menu").slideUp(300)});o(".dropdown .dropdown-menu li").click(function(){const e=o(this).text(),t=o(this).attr("id");switch(o(this).parents(".dropdown").find("span").text(e),o(this).parents(".dropdown").find("input").attr("value",t),t){case"Task1":l.innerHTML="",v();break;case"Task2":l.innerHTML="",k();break;case"Task3":l.innerHTML="",w();break;default:console.log("No task selected")}});
//# sourceMappingURL=index.js.map
