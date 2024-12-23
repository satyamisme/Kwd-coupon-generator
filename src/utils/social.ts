interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linktree?: string;
}

export const generateSocialUrl = (links: SocialLinks): string => {
  if (links.linktree) {
    return `https://linktr.ee/${links.linktree}`;
  }

  const baseUrl = 'https://example.com/follow';
  const params = new URLSearchParams();
  
  if (links.facebook) params.append('fb', links.facebook);
  if (links.instagram) params.append('ig', links.instagram);
  if (links.twitter) params.append('tw', links.twitter);
  
  return `${baseUrl}?${params.toString()}`;
};