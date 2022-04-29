import {render} from '@testing-library/react'
import {Sidebar} from './Sidebar'

const userName = 'test'
describe('Sidebar component', () => {
    it('should render', () => {
        const {getByTestId} = render(<Sidebar userName={userName} />)
        const sidebarComponent = getByTestId('sidebar')
        expect(sidebarComponent).toBeTruthy()
    })
})