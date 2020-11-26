function identity<T>(x: T) {
    return x;
}

const str_i = identity<string>('a');
const num_i = identity<number>(3);
const bool_i = identity<boolean>(true);


