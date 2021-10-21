async function AllPodutos(){
    produtos = await axios`https://fakestoreapi.com/products`
    return produtos
}
async function UmResultado(){
    UmProduto = await axios `https://fakestoreapi.com/products/1`
    return UmProduto
}
async function LimitarResultados(){
    limit = 5
    listadeprodutos = await axios `https://fakestoreapi.com/products?limit=${limit}`
    return listadeprodutos
}
async function ClassificarResultadosPorPreço(classficacao){
    listadeprodutos = await axios `https://fakestoreapi.com/products?sort=${classficacao}`
    return listadeprodutos
}
async function ObterCategorias(){
    listadecategorias = await axios `https://fakestoreapi.com/products/categories`
    return listadecategorias
}
async function ObterCategoriaEspecifica(){
    categoria = "jewelery"
    ProdutosPorCategoria = await axios `https://fakestoreapi.com/products/categories/${categoria}`
    return ProdutosPorCategoria
}
async function ObterCarrinho(){
    carrinho = `https://fakestoreapi.com/carts/5`
    return carrinho
}
$(function() {
    console.log( "ready!" );
    AllPodutos()
    UmResultado()
    LimitarResultados()
    ClassificarResultadosPorPreço("desc")   // classficação é "desc" ou "asc"
    ObterCategorias()
    ObterCategoriaEspecifica()
    ObterCarrinho()
});