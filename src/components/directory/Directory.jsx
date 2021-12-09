import React, { Component } from 'react'
import MenuItem from '../menuItem/MenuItem';
import './Directory.scss';

export default class Directory extends Component {

    constructor() {
        super();
    
        this.state = {
          sections: [
            {
              title: 'DHAKA TOPI',
              imageUrl: 'https://i.pinimg.com/originals/b1/c0/fd/b1c0fd25684a7769d2f1ca1cf89d7edd.jpg',
              id: 1,
              linkUrl: 'dhakatopis'
            },
            {
              title: 'DAURA SURUWAL',
              imageUrl: 'https://i.pinimg.com/564x/d7/7a/76/d77a767a26594beebfb98f54fa07a1ca.jpg',
              id: 2,
              linkUrl: 'dhakatopis'
            },
            {
              title: 'GUNYOU CHOLO',
              imageUrl: 'https://zappylily.files.wordpress.com/2016/05/88ead-dsc_7630.jpg',
              id: 3,
              linkUrl: 'dhakatopis'
            },
            {
              title: 'WOMENS',
              imageUrl: 'https://i.pinimg.com/564x/bb/bb/48/bbbb48bdd8d9bedb792c1e3671c89ffe.jpg',
              size: 'large',
              id: 4,
              linkUrl: 'dhakatopis'
            },
            {
              title: 'MENS',
              imageUrl: 'https://i.pinimg.com/564x/ab/b7/79/abb77900c96085270d6caa28742d1428.jpg ',
              size: 'large',
              id: 5,
              linkUrl: 'dhakatopis'
            }
          ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                ))}
            </div>
        )
    }
}

