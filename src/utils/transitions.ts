
export function fadeIn() {
  const context = document.querySelector('div.TransitionContext');
  context?.classList.remove('page-is-transitioning');
}

export function fadeOut() {
  const context = document.querySelector('div.TransitionContext');
  context?.classList.add('page-is-transitioning');
}