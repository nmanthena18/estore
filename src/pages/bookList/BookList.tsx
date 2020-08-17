import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getfetchBooksInit, updateBooks, loadBooks} from '../../store/actions/book'
import {addToCart} from '../../store/actions/cart'
import BookComponent from '../../components/book/Book'
import {Book } from '../../components/book/BookInterface'
import "./BookList.scss";
import {CHECKOUT} from '../../routes/contant'

type BookReducer = {
  data: Book[],
  count: number
}

type RootState = {
  book: BookReducer
}


const  BookList: React.FC = () => {

  const history:any = useHistory();
  const dispatch = useDispatch();

  const [defaultLoadBooksCount, setdefaultLoadBooksCount] = useState<number>(5)
  const [booksToRender, setbooksToRender] = useState<Book[]>()
  const books = useSelector((state: RootState) => state?.book?.data);
  const count = useSelector((state: RootState) => state?.book?.count);

  useEffect(() => {
    if(books && books.length === 0)
      dispatch(getfetchBooksInit());
  }, []);

  useEffect(() => {
    setbooksToRender(books.slice(0,count))
  }, [books, count])

  const onClickBuy = (book: Book) => {
    book.isBought = true
    dispatch(addToCart(book))
    dispatch(updateBooks([book,...books.filter(item => item?.isbn !== book?.isbn)].sort((a,b) => a.id - b.id)))
    history.push(CHECKOUT)
  }

  return (
    <section>
      <div className="container-main first-continer">
        <div className="books_box">
          {booksToRender &&
            booksToRender.map((book, index) => <BookComponent book={book} onClickBuy={onClickBuy} index={index} />)}
        </div>
        {function() {
          if(books.length > 0)
              return <div className="bkl-btn-group">
              <button id="show-more" onClick={(e) => dispatch(loadBooks(defaultLoadBooksCount))}> SHOW MORE</button>
          </div>
        }()}        
      </div>
    </section>
  );
}

export default BookList;
