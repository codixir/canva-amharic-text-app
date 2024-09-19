import { conversion } from './am-table';

export function transliterate(input) {
    let result = input;
    
    // Sort conversion rules by length (longest first)
    const sortedConversion = conversion.sort((a, b) => b.l.length - a.l.length);
    
    for (const rule of sortedConversion) {
        const regex = new RegExp(rule.l, 'g');
        result = result.replace(regex, rule.t);
    }
    
    return result;
}