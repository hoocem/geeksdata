import { useContext } from "react";
import {useRouter} from "next/router";
import SolutionBanner from "../containers/solution-banner/SolutionBanner";
import Work from "../containers/work/Work";
import Pricing from "../containers/pricing/Pricing";
import Clients from "../containers/clients/Clients";
import {AuthContext} from "../contexts/auth/authContext";
import SEO from "../components/seo";

export default function Solution() {
  const router = useRouter();

  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  if (!isAuthenticated && typeof window !== 'undefined') router.push("/login");

  return isAuthenticated && (
    <>
      <SEO title="Solution | Geeks Data" description="Page de description de produit du mini site du teste technique pour Geeks Data" />
      <SolutionBanner />
      <Work />
      <Pricing />
      <Clients />
    </>
  )
}
