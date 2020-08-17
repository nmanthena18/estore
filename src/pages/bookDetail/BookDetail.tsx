import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addToCart } from '../../store/actions/cart'
import {getfetchBooksInit, updateBooks} from '../../store/actions/book'
import { Book } from '../../components/book/BookInterface';
import {CHECKOUT} from '../../routes/contant'
import './BookDetail.scss'

  type data = {
    data: Book[]
  }
  
  type RootState = {
    book: data
  }

const BookDetail: React.FC = () => {

    const history: any = useHistory();
    const dispatch = useDispatch()
    const { isbn } = useParams()
    const [selectedBook, setSelectedBook] = useState<Book>()
    const books = useSelector((state: RootState) => state?.book?.data);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        setSelectedBook(books.find(book => book?.isbn === isbn))
    }, [isbn])

    const onClickBuy = (book:Book | undefined) => {
        if(book)
            book.isBought = true
            dispatch(addToCart(book))
            updateBookList(book)
            history.push(CHECKOUT)
    }

    const onClickAddToCart = (book: Book | undefined) => {
        if(book)
            book.isBought = true
            dispatch(addToCart(book))
            updateBookList(book)
    }

    const updateBookList = (book:Book | undefined) => {
        let updatedBooks = [book,...books.filter(item => item?.isbn !== book?.isbn)]
        if(updatedBooks && updatedBooks.length > 0) {
            updatedBooks.sort((a,b) => {
                if(a && b) {
                    return a.id - b.id
                }
                return 0
            })
            dispatch(updateBooks(updatedBooks))
        }   
    }

    return (
        <section>
            <div className="container-main">
                <div className="product_img">
                    <div className="text-center"><img className="img_prod" src={selectedBook?.thumbnailUrl} /></div>
                </div>
                <div className="product_content">
                    <div>
                        <h2 className="product_heading">{selectedBook?.title}</h2>
                        {/* <h5 className="product_price">5.89$</h5> */}
                        <p className="p_desc">Author:<span className="spn_desc">{selectedBook?.author}</span></p>
                        <p className="p_desc">Page Count:<span className="spn_desc">{selectedBook?.pageCount}</span></p>
                        <p className="p_desc">ISBN:<span className="spn_desc">{selectedBook?.isbn}</span></p>
                        <p className="p_desc">Price:<span className="spn_desc">{selectedBook?.price}</span></p>                        
                        <p className="p_desc">Categories:<span className="spn_desc">{selectedBook?.categories?.join()}</span></p>
                        <div><button disabled={selectedBook?.isBought} type="button" className="product_btns btn1" onClick={() => onClickAddToCart(selectedBook)}>Add to Cart</button>
                            <button disabled={selectedBook?.isBought} type="button" className="product_btns btn2" onClick={(e) => onClickBuy(selectedBook)}>Buy now</button></div>
                        <p className="main_desc">{selectedBook?.longDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetail
