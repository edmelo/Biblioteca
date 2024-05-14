# Construa uma Biblioteca

O código fornecido é uma implementação de uma biblioteca de mídia, que inclui classes para livros e filmes. Vamos analisar o código passo a passo:

## Classe Media

A classe `Media` é a classe base para todas as mídias na biblioteca. Ela possui propriedades como `_property`, `_title`, `_isCheckedOut` e `_ratings`. O construtor da classe `Media` recebe um parâmetro `property` e inicializa as propriedades correspondentes. A propriedade `_property` é usada para armazenar todas as propriedades passadas no parâmetro `property`, enquanto `_title` é definido como `property.title`. A propriedade `_isCheckedOut` é inicializada como `false` e `_ratings` é inicializada como um array vazio.

A classe `Media` também possui getters e setters para as propriedades `_title`, `_isCheckedOut` e `_ratings`. Os getters retornam os valores correspondentes das propriedades, enquanto o setter `_isCheckedOut` atualiza o valor da propriedade `_isCheckedOut`.

A classe `Media` também possui os métodos `toggleCheckOutStatus()`, `getAverageRating()` e `addRating(rating)`. O método `toggleCheckOutStatus()` alterna o valor da propriedade `_isCheckedOut`, ou seja, se a mídia estiver emprestada, ela será marcada como disponível e vice-versa. O método `getAverageRating()` calcula a média das avaliações armazenadas no array `_ratings`. Ele usa o método `reduce()` para somar todas as avaliações e depois divide pelo número de avaliações para obter a média. O método `addRating(rating)` adiciona uma nova avaliação ao array `_ratings`.

## Classe Book

A classe `Book` é uma subclasse da classe `Media` e adiciona propriedades específicas para livros, como `_author` e `_pages`. O construtor da classe `Book` recebe os parâmetros `author`, `title` e `pages` e chama o construtor da classe `Media`, passando um objeto contendo a propriedade `title`. Em seguida, ele inicializa as propriedades `_author` e `_pages` com os valores correspondentes dos parâmetros.

A classe `Book` também possui getters para as propriedades `_author` e `_pages`. Além disso, ela substitui os métodos `toggleCheckOutStatus()` e `addRating(rating)` da classe `Media`, chamando os métodos correspondentes da classe pai usando a palavra-chave `super`.

## Classe Movie

A classe `Movie` é semelhante à classe `Book`, mas adiciona propriedades específicas para filmes, como `_director` e `_runTime`. O construtor da classe `Movie` é semelhante ao da classe `Book`, mas inicializa as propriedades `_director` e `_runTime` com os valores correspondentes dos parâmetros.

A classe `Movie` também possui getters para as propriedades `_director` e `_runTime`. Além disso, ela substitui os métodos `toggleCheckOutStatus()` e `addRating(rating)` da classe `Media`, chamando os métodos correspondentes da classe pai usando a palavra-chave `super`.

## Uso

No final do código, são criadas instâncias das classes `Book` e `Movie`, e os métodos são chamados para demonstrar a funcionalidade das classes. Por exemplo, uma instância de `Book` chamada `historyOfEverything` é criada com os parâmetros 'Bill Bryson', 'A Short History of Nearly Everything' e 544. Em seguida, o método `toggleCheckOutStatus()` é chamado para marcar o livro como emprestado. O método `addRating(rating)` é chamado três vezes para adicionar avaliações ao livro. Por fim, o método `getAverageRating()` é chamado para calcular a média das avaliações, e o resultado é impresso no console.

Da mesma forma, uma instância de `Movie` chamada `speed` é criada com os parâmetros 'Jan de Bont', 'Speed' e 116. O método `toggleCheckOutStatus()` é chamado para marcar o filme como emprestado. O método `addRating(rating)` é chamado três vezes para adicionar avaliações ao filme. Por fim, o método `getAverageRating()` é chamado para calcular a média das avaliações, e o resultado é impresso no console.

Essas classes e métodos fornecem uma estrutura básica para gerenciar uma biblioteca de mídia, permitindo a criação de livros e filmes, marcando-os como emprestados ou disponíveis, adicionando avaliações e calculando as avaliações médias.