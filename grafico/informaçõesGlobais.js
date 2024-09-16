const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/data-globalThis-JSON";

async function vizualizadorInormacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json
    console.log(dados)
}

vizualizadorInormacoesGlobais();