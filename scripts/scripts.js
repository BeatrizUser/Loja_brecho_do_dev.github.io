async function AllPodutos(){
    produtos = await axios ("https://fakestoreapi.com/products")
    console.log(produtos.data)
    return produtos
}
async function UmResultado(){
    UmProduto = await axios (`https://fakestoreapi.com/products/1`)
    console.log(UmProduto.data)
    return UmProduto
}
async function LimitarResultados(){
    limit = 5
    listadeprodutos = await axios (`https://fakestoreapi.com/products?limit=${limit}`)
    console.log(listadeprodutos.data)
    return listadeprodutos
}
async function ClassificarResultadosPorOrdem(classficacao){
    listadeprodutos = await axios (`https://fakestoreapi.com/products?sort=${classficacao}`)
    console.log(listadeprodutos.data)
    return listadeprodutos

}
async function ObterCategorias(){
    listadecategorias = await axios (`https://fakestoreapi.com/products/categories`)
    console.log(listadecategorias.data)
    return listadecategorias
}
async function ObterCategoriaEspecifica(){
    categoria = "jewelery"
    ProdutosPorCategoria = await axios (`https://fakestoreapi.com/products/category/${categoria}`)
    console.log(ProdutosPorCategoria.data)
    return ProdutosPorCategoria
}
async function ObterCarrinho(){
    carrinho = await axios (`https://fakestoreapi.com/carts/5`)
    console.log(carrinho.data)
    return carrinho
}
$(function() {
    console.log( "ready!" );
    // AllPodutos()
    // UmResultado()
    // LimitarResultados()
    // ClassificarResultadosPorOrdem("desc")   // classficação é "desc" ou "asc"
    // ObterCategorias()
    // ObterCategoriaEspecifica()
    ObterCarrinho()
});