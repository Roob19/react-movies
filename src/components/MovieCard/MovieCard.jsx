import React from 'react';
import { movies } from '../../utilities/data';
import { CCard,
        CCardImage, 
        CCardHeader, 
        CCardBody, 
        CCardTitle, 
        CCardText, 
        CCardGroup, 
        CListGroup, 
        CListGroupItem, 
        CCardLink, 
        CCardFooter } from '@coreui/react';
import './MovieCard.css'

export default function MovieCard() {
    return (
        <CCard style={{ width: '18rem' }}>
            <CCardImage orientation='top' src={movies.poster_path} />
            <CCardHeader>{movies.title}</CCardHeader>
            <CCardBody>
                <CCardTitle>
                    Debut: {movies.release_date}.toLocalDateString() 
                </CCardTitle>
                <CCardText>
                    Cast Members: 
                </CCardText>
            </CCardBody>
            <CListGroup flush>
                {movies.cast.map((actor) => {
                    return (
                        <CListGroupItem key={actor}>
                            {actor}
                        </CListGroupItem>
                    )
                })}
            </CListGroup>
        </CCard>
    )
}