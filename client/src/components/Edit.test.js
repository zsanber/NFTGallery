import {render} from '@testing-library/react'
import {Edit} from './Edit'

const data = []
describe('Edit component', () => {
    it('should render', () => {
        const {getByTestId} = render(<Edit categoryList={data}/>)
        const editcComponent = getByTestId('editcComponent')
        expect(editcComponent).toBeTruthy()
    })
})