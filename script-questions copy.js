
var contador = 0;
function cores(){
   let labels = document.querySelectorAll(".input"); 
      for (const input of labels) {
         input.addEventListener("click", ()=> {
            let labels = document.querySelectorAll(".input"); 

            for (const alternativa of labels) {
               let verificar = input.children[0];
            if (verificar.checked){
            input.classList.add("input-active")
            }else{
            alternativa.classList.remove("input-active");
            console.log("teste");
            }
            }
         })
}

}

cores();


    var contAdm = 0;
    var contInfo = 0;
    var contMarketing = 0;
    var contJuridico = 0;
    var contRh = 0;
    var contSeguranca = 0;
    var contComercio = 0;
var radios = document.getElementsByClassName("p");

document.querySelector('.enviar').addEventListener('click', ()=>{
       
    var radioSelecionado = false;
    for(var i=0; i<radios.length; i++) {
        if(radios[i].checked) {
            radioSelecionado = true;
         
            if(radios[i].value === "ADM") {
                contAdm++;
            } 
            
            else if (radios[i].value === "INFO") {
                contInfo++;
            } 
            
            else if (radios[i].value === "MARKETING") {
                contMarketing++;
            } 
            
            else if (radios[i].value === "RH") {
                contRh++;
            } 
            
            else if (radios[i].value === "SEGURANCA") {
                contSeguranca++;
            } 
            
            else if (radios[i].value === "COMERCIO") {
                contComercio++;
            } 
            
            else{
                contJuridico++;
            }

            
        }
        }
   
        if (!radioSelecionado) {
            Swal.fire({
                icon: 'warning',
                title: 'Atenção',
                text: 'Por favor, clique em uma alternativa antes de avançar para a próxima pergunta!',
                confirmButtonColor: '#800080bd',
                

            });
                return;
            } 

            contador++;

                console.log("info =", contInfo, "adm =", contAdm,"mar =", contMarketing,"com =",  contComercio,"rh =", contRh,"seg =", contSeguranca, "jur =", contJuridico);
        
   
   let pergunta = document.querySelector(".questions");
   if (contador == 1) {
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 20%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 2/10</strong>
            <h2>Quais são as áreas que mais te interessam?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Gestão e organização.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Economia e negócios internacionais.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Tecnologia e inovação digital.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Vendas e publicidade.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Gestão de recursos humanos.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Aspectos legais e conformidade.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Prevenção de acidentes e segurança ocupacional.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 2){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 30%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 3/10</strong>
            <h2>Como você se sente em situações de trabalho em grupo?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span>Gosto de liderar e organizar equipes.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Prefiro contribuir com ideias estratégicas.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Gosto de colaborar online e em projetos digitais.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Gosto de aconselhar e vender ideias.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Gosto de resolver problemas entre pessoas e lidar com as relações entre elas.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Prefiro estabelecer procedimentos para o grupo.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Cuido da segurança e integridade do grupo.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 3){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 40%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 4/10</strong>
            <h2>Quando toma decisões, o que é mais importante para você?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Estabelecer estratégias eficazes.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Analisar dados e tendências de mercado.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Adotar inovações e tendências digitais.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Atingir metas de vendas e marketing.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Considerar o impacto nas relações humanas.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Estabelecer procedimentos eficientes</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Priorizar a segurança e bem-estar.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 4){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 50%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 5/10</strong>
            <h2>Quais são seus objetivos profissionais?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Gerenciar equipes e projetos.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Expandir negócios globalmente.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Desenvolver aplicativos e soluções digitais.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Posicionar marcas e produtos no mercado.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Lidar com questões de gestão de pessoas.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Lidar com aspectos legais e organizacionais.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Garantir a segurança no ambiente de trabalho.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 5){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 60%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 6/10</strong>
            <h2>Qual impacto você gostaria de ter no mundo?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Organizar e otimizar processos.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Facilitar negócios globais.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Contribuir para a evolução tecnológica.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Influenciar decisões de compra e mercado.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Melhorar o ambiente de trabalho e relações.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Garantir a legalidade e conformidade com a lei.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Assegurar a segurança e bem-estar trabalhista.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 6){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 70%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 7/10</strong>
            <h2>Quais são seus pontos fortes?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Liderança e organização.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Análise e estratégia comercial.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Habilidades em tecnologia digital.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Persuasão e marketing.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Gestão de pessoas e lidar bem com os outros.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Conhecimento em aspectos sobre regras e organização.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Conhecimento em segurança do trabalho e prevenção.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 7){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 80%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 8/10</strong>
            <h2>Em quais matérias da escola você mais se destaca?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Matemática e Física.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Geografia e História.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Informática e Matemática.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Língua portuguesa e artes.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Sociologia e Psicologia.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Ética e Filosofia.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Educação Física e Biologia.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 8){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 90%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 9/10</strong>
            <h2>Qual seria sua carreira dos sonhos?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Gerente ou Diretor de Empresa.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Consultor Internacional.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Desenvolvedor de Software.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Especialista em Marketing.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Gerente de Recursos Humanos.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Advogado Empresarial.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Técnico de Segurança do Trabalho.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 9){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 99%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 10/10</strong>
            <h2>Que tipo de desafio você prefere enfrentar?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" id="a" class="p" value="ADM">
                    <div class="input-content">
                        <span> Desafios de gestão e liderança.</span>
                    </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" id="b" class="p"  value="COMERCIO">
                    <div class="input-content">
                        <span> Desafios econômicos e globais.</span>
                    </div>
                </label>
                <label for="c" class="input">
                    <input type="radio" name="p1" id="c" class="p"  value="INFO">
                    <div class="input-content">
                        <span> Desafios tecnológicos e digitais.</span>
                    </div>
                </label>
                <label for="d" class="input">
                   <input type="radio" name="p1" id="d" class="p"  value="MARKETING">
                    <div class="input-content">
                        <span> Desafios de vendas e publicidade.</span>
                    </div>
                </label>
                <label for="e" class="input">
                    <input type="radio" name="p1" id="e" class="p"  value="RH">
                    <div class="input-content">
                        <span> Saber sobre leis e organizações.</span>
                    </div>
                </label>
                <label for="f" class="input">
                    <input type="radio" name="p1" id="f" class="p"  value="JURIDICO">
                    <div class="input-content">
                        <span> Desafios relacionados com leis e organização.</span>
                    </div>
                </label>
                <label for="g" class="input">
                    <input type="radio" name="p1" id="g" class="p"  value="SEGURANCA">
                    <div class="input-content">
                        <span> Desafios de segurança e prevenção no trabalho.</span>
                    </div>
                </label>
            </div>
        </div>`
        cores();
   }else{
            const mostrarResultado = Math.max(contInfo, contAdm, contMarketing, contComercio, contRh, contSeguranca, contJuridico);
            switch(mostrarResultado){
               case contInfo:
                   window.location.href = "./info.html";
                    break;
                case contAdm:
                   window.location.href = './adm.html';
                    break;
                case contMarketing:
                   window.location.href = './marketing.html';
                    break;
                case contComercio:
                   window.location.href = './comercio.html';
                    break;
                case contRh:
                   window.location.href = './rh.html';
                    break;
                case contSeguranca:
                   window.location.href = './seguranca.html';
                    break;
                case contJuridico:
                   window.location.href = './juridico.html';
                    break;    
             }
           }
        }
        
        )
        



