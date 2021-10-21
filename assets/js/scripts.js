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
async function LimitarResultados(limit){
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
function gerahtmldoproduto(produto){
    return `<div class="col-lg-4 col-md-4 all gra">
    <div class="product-item">
    <a href="#"><img src="${produto.image}" alt=""></a>
    <div class="down-content">
    <a href="#"><h4>${produto.title}</h4></a>
    <h6>R$${produto.price}</h6>
    <p>${produto.description}</p>
    <ul class="stars">
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    </ul>
    <span>Reviews (${produto.rating.count})</span>
    </div>
    </div>
    </div>`   
}
function chamarprodutos(produtos){
    $(".produto").css("height", "auto")
    for (let produto of produtos.data){
          let body = $(".row .grid")
          $(".produto").css("height", "auto")
          let html = gerahtmldoproduto(produto)
              body.append(html)
    }
}

