import { render } from '@testing-library/react';

import CardProfile from './card-profile';

describe('CardProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardProfile />);
    expect(baseElement).toBeTruthy();
  });
});
