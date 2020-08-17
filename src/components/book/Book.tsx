import React from 'react'
import {Link} from 'react-router-dom'
import {Book} from './BookInterface'
import './Book.scss'

type Props = {
    book: Book,
    onClickBuy: (obj: Book) => void,
    index: number
}

const BookComponent: React.FC<Props> = ({book,onClickBuy, index }) => {
    return (
        <div className="books_card" key={index}>
            <Link to={"/book-detail/" + book?.isbn} key={index}>
                <img src={book?.thumbnailUrl} style={{ width: "100%" }} />
            </Link>
            <div className="container">
                <h4>
                    <b>{book?.title}</b>
                </h4>
                <p className="desc-height" title={book?.shortDescription}>{book?.shortDescription}</p>
                <div className="text-center">
                    <button disabled={book.isBought} type="button" className="book_btn" onClick={(e) => onClickBuy(book)}>
                        Buy Book
                      </button>
                </div>
            </div>
        </div>
    )
}

export default BookComponent
