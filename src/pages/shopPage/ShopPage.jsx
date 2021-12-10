import React from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';
import { Component } from 'react'

export class ShopPage extends Component {
    constructor(props){
        super(props)

        this.state={
            collections: SHOP_DATA
        }
        
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='ShopPage'>
                {
                    collections.map(({ id, ...otherCollectionProps }) =>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))    
                }
            </div>
        )
    }
}

export default ShopPage;
