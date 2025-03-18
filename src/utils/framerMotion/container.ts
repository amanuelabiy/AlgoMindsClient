export const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const problemsFacedTextContainer = (delay: number) => ({
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const pricingTextContainer = (delay: number) => ({
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const pricingDisclaimerContainer = (delay: number) => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const faqTextContainer = (delay: number) => ({
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
