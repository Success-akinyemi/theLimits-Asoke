import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function useFetchCategory(query) {
    const [cat, setCat] = useState({ isLoadingCat: true, catData: null, catStatus: null, catError: null})

    const fetchCategoryData = useCallback(async () => {
        try {

            const { data, status } = !query ? await axios.get(`/api/getCategories`) : await axios.get(`/api/${query}`)

            if (status === 200) {
                setCat({ isLoadingCat: false, catData: data, catStatus: status, catError: null })
            } else {
                setCat({ isLoadingCat: false, catData: null, catStatus: status, catError: null })
            }
        } catch (error) {
            setCat({ isLoadingCat: false, catData: null, catStatus: null, catError: error })
        }
    }, [query]);

    useEffect(() => {
        fetchCategoryData();
    }, [fetchCategoryData]);

    return cat;
}

export function useFetchProduct(query) {
    const [product, setProduct] = useState({ isLoadingProduct: true, productData: null, productStatus: null, productError: null})

    const fetchCategoryData = useCallback(async () => {
        try {

            const { data, status } = !query ? await axios.get(`/api/product`) : await axios.get(`/api/product/${query}`)

            if (status === 200) {
                setProduct({ isLoadingProduct: false, productData: data, productStatus: status, productError: null })
            } else {
                setProduct({ isLoadingProduct: false, productData: null, productStatus: status, productError: null })
            }
        } catch (error) {
            setProduct({ isLoadingProduct: false, productData: null, productStatus: null, productError: error })
        }
    }, [query]);

    useEffect(() => {
        fetchCategoryData();
    }, [fetchCategoryData]);

    return product;
}

export function useFetchProductCategory(query) {
    const [productCategory, setProductCategory] = useState({ isLoadingProductCategory: true, productCategoryData: null, productSCategorytatus: null, productCategoryError: null})

    const fetchCategoryData = useCallback(async () => {
        try {

            const { data, status } = !query ? await axios.get(`/api/product`) : await axios.get(`/api/product?category=${query}`)

            if (status === 200) {
                setProductCategory({ isLoadingProductCategory: false, productCategoryData: data, productCategoryStatus: status, productCategoryError: null })
            } else {
                setProductCategory({ isLoadingProductCategory: false, productCategoryData: null, productCategoryStatus: status, productCategoryError: null })
            }
        } catch (error) {
            setProductCategory({ isLoadingProductCategory: false, productCategoryData: null, productCategoryStatus: null, productCategoryError: error })
        }
    }, [query]);

    useEffect(() => {
        fetchCategoryData();
    }, [fetchCategoryData]);

    return productCategory;
}