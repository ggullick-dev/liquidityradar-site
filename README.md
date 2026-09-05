# Liquidity Radar website

Public, static website for [liquidityradar.io](https://liquidityradar.io). It is deliberately separate from the private Liquidity Radar product repository.

## Local preview

Open `index.html` in a browser. No dependencies, framework, build step, analytics, forms, or JavaScript are used.

## Deploy with GitHub Pages

1. In this repository, open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose the `main` branch and `/ (root)`, then save.
4. Under **Custom domain**, enter `liquidityradar.io` and save.
5. Once GitHub issues the certificate, enable **Enforce HTTPS**.

The included `CNAME` file preserves the custom domain during deployments.

## Porkbun DNS

Keep Porkbun as the DNS provider so the website and email records can coexist. Add these GitHub Pages records without removing the existing email MX or SPF records:

| Type | Host | Answer |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ggullick-dev.github.io` |

DNS changes can take time to propagate. Configure the GitHub Pages custom domain before changing DNS, then verify both `https://liquidityradar.io` and `https://www.liquidityradar.io`.

## Updating the site

Edit the plain HTML and CSS, commit to `main`, and GitHub Pages will publish the update automatically.
