export type ErrorConfig = {
  image: {
    src: string;
    altText: string;
  };
  info: string;
  additionalText: string;
  action?: {
    func: () => void;
    btnText: string;
  };
};

export const errorConfig: Record<string, ErrorConfig> = {
  unexpectedError: {
    image: {
      src: '/images/flying-saucer.png',
      altText: 'Flying saucer image',
    },
    info: 'Unexpected error occurred...',
    additionalText: 'Try again a bit later',
    action: {
      func: () => window.location.reload(),
      btnText: 'Reload page',
    },
  },
  noDataFound: {
    image: {
      src: '/images/magnifying-glass.png',
      altText: 'Magnifying glass image',
    },
    info: "We didn't find anyone",
    additionalText: 'Try to adjust your request',
  },
};
