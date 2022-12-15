import { ButtonLink } from "../../components/atomics/ButtonLink"
import { Layout } from "../../components/templates/Layout";

export const ErrorPage = () => {
    return (
        <>
            <Layout title="Error Page">
              <ButtonLink to="/">
                Go to home
              </ButtonLink>
            </Layout>
        </>
        
    )
}