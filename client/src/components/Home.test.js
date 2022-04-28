/*
import {render} from '@testing-library/react';
import {Home} from './HOme';

const data=[];

describe('Home Component', () => {

    it('should rendered', () => {
        const {getByTestId} = render (<Posts posts={data}/>)
        const postComponent = getByTestId('postComponent')
        expect(postComponent).toBeTruthy()
    })

    it('should rendered with message', () => {
        const {getByTestId} = render (<Posts posts={data}/>)
        const div = getByTestId('divMsg')
        expect(div).toBeTruthy()
    })

})


betenni: 
<div className="posts mt-3" data-testid="postsComponent">
     
     {posts.length > 0 && {posts.map(obj=><Post key={obj.id} {...obj}/>)}}
     {posts.length == 0 && <div data-testid="divMsg">nincs adat</div>}

    </div>
    
    */