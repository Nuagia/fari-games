import { IShopProductWithAuthor } from "../../../data/shop/types/IShopProduct";

export const AppLinksFactory = {
  makeHomeLink() {
    return "/";
  },
  makeBrowseLink() {
    return "/browse";
  },
  makeAuthorLink(game: IShopProductWithAuthor | undefined) {
    if (!game) {
      return "";
    }
    return `/browse/${game.author.slug}`;
  },
  makeProductLink(game: IShopProductWithAuthor | undefined) {
    if (!game) {
      return "";
    }
    return `/browse/${game.author.slug}/${game.slug}`;
  },
  makeGameLink(props: { author: string; game: string; language?: string }) {
    if (!props.language || props.language === "en") {
      return `/en/srds/${props.author}/${props.game}`;
    }
    return `/${props.language}/srds/${props.author}/${props.game}`;
  },
  makeSearchPage(query: string) {
    return `/search?query=${query}`;
  },
  makeGameChapterLink(props: {
    author: string;
    game: string;
    chapter: string;
    language?: string;
  }) {
    if (!props.language || props.language === "en") {
      return `/en/srds/${props.author}/${props.game}/${props.chapter}`;
    }
    return `/${props.language}/srds/${props.author}/${props.game}/${props.chapter}`;
  },
};
