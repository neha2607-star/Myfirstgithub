import {test, testP} from '../../fixturesframe/crmfixtures'
import Productclass from '../../Pages/Contact'
import Product from '../../test-data/product.json'

testP('Productfixtures',async ({Products}) => {
    test.slow()
    await Products.productdetails(Product.productname)
}) 

